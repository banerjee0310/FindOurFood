import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Tandoori Roti',
    description: 'Flatbread made with whole wheat and traditionally cooked in tandoor',
    price: 15.00,
  },
  {
    id: 'm2',
    name: 'Butter Chicken',
    description: 'Type of curry made from chicken with a spiced tomato and butter',
    price: 450,
  },
  {
    id: 'm3',
    name: 'Hyderabadi Biriyani',
    description: 'A spiced mix of meat and rice',
    price: 180,
  },
  {
    id: 'm4',
    name: 'Kadai Panner',
    description: 'Spicy paneer recipe made with fresh ground kadai masala,paneer,onions,tomatoes',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
