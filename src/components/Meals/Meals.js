import React, { Fragment } from 'react'
import MealsSumm  from './MealsSumm';
import AvailableMeals from './AvailableMeals';
const Meals = () => {
  return (
    <Fragment>
        <MealsSumm/>
        <AvailableMeals/>
    </Fragment>
  )
}

export default Meals