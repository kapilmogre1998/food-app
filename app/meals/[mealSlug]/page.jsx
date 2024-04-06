import Image from 'next/image';
import styleClasses from './page.module.css';
import { getMealDetails } from '@/lib/meal';

export default function MealsDetailsPage ({ params }) {
    const { title, creator, summary, instructions, image, creator_email } = getMealDetails(params.mealSlug)
    
    return (
        <>
          <header>
            <div>
                <Image src={image} alt={title} width={400} height={400} />
            </div>
            <div>
                <h1>{title}</h1>
                <p>by {creator}</p>
                <p>{summary}</p>
                <a href={`mailto:${creator_email}`}></a>
            </div>
          </header>
          <main>
            {instructions}
          </main>
        </>
    )
}