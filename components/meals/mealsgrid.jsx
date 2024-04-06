import MealItem from "./mealItem";
import styleClasses from './mealsgrid.module.css';

export default function MealsGrid({meals}) {
  return (
    <div className={styleClasses.meals} >
      {meals.map((meal, index) => <MealItem key={index} {...meal} />)}
    </div>
  );
}