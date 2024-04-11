import Image from 'next/image';
import styleClasses from './page.module.css';
import { getMealDetails } from '@/lib/meal';
import { notFound } from 'next/navigation';

//GENERATE DYNAMIC META DATA
export async function generateMetadata({ params }) {
  const meal = getMealDetails(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.instructions
  }
}

export default function MealsDetailsPage({ params }) {
  const { title, creator, summary, instructions, image, creator_email } = getMealDetails(params.mealSlug);

  const instructionsLineBreak = instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styleClasses.header} >
        <div>
          <Image className={styleClasses.image} src={image} alt={title} width={400} height={400} />
        </div>
        <div className={styleClasses.headerText} >
          <h1>{title}</h1>
          <p className={styleClasses.creator} >
            by  <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styleClasses.summary} >{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styleClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: instructionsLineBreak
          }}
        ></p>
      </main>
    </>
  )
}