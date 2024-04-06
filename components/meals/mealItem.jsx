import Link from 'next/link';
import Image from 'next/image';

import styleClasses from './mealItem.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={styleClasses.meal}>
      <header>
        <div className={styleClasses.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styleClasses.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styleClasses.content}>
        <p className={styleClasses.summary}>{summary}</p>
        <div className={styleClasses.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}