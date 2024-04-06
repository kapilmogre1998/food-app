import MealsGrid from "@/components/meals/mealsgrid";
import Link from "next/link";

import styleClasses from './page.module.css';
import { getMeals } from "@/lib/meal";


export default function MealsPage() {
    const meals = getMeals();

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
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}