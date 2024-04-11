import MealsGrid from "@/components/meals/mealsgrid";
import Link from "next/link";

import styleClasses from './page.module.css';
import { getMeals } from "@/lib/meal";

//nextjs will add this metadata by default to html
//if i don't have metadata here then this component will add metadata from layout
export const metadata = {
    title: 'All meals',
    description: 'Delicious meals, shared by a food-loving community.',
  };

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}
  

export default function MealsPage() {

    return (
        <>
            <header className={styleClasses.header} >
                <div className={styleClasses.hero} >
                    <h1>Delicious meals, created <span>by you</span></h1>
                </div>
                <p>Choose your favorite recipe and cook it yourself.</p>
                <div className={styleClasses.cta} >
                    <Link href='/meals/share' >Share Your Favorite Recipe</Link>
                </div>
            </header>
            <main>
                {Meals()}
            </main>
        </>
    )
}