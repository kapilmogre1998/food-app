const sql = require('better-sqlite3');
const db = sql('meals.db');


export function getMeals() {
    // throw new Error(""); //If error commes error.jsx will get rendered
    return db.prepare('SELECT * FROM meals').all();
}

export function getMealDetails(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}