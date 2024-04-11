import fs from 'node:fs';

import slugify from 'slugify';
import xss from 'xss';
const sql = require('better-sqlite3');
const db = sql('meals.db');


export function getMeals() {
    // throw new Error(""); //If error commes error.jsx will get rendered
    return db.prepare('SELECT * FROM meals').all();
}

export function getMealDetails(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    //Instead of storing it in folder store it in AWS S3.
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('saving image failed!')
        }
    })

    meal.image = `/images/${fileName}`

    db.prepare(`
    INSERT INTO meals
    (slug, title, summary, instructions, creator, creator_email, image)
    VALUES (
      @slug,
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image
    )
  `).run(meal);
}