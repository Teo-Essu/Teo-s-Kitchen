import styles from './meal-grid.module.css';
import MealItem from './meals-item';

export default function MealsGrid({meals}) {
    return(
        <>
            <ul className={styles.meals}>
                {meals.map(meal => 
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                )}
            </ul>
        </>
    )
}