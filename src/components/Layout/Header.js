import { Fragment } from "react";

import classes from './Header.module.css';
import HeaderCartButton  from "./HeaderCartButton";
import foodBg from '../../assets/food_bg.jpg';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FindOurFood.</h1>
       <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={foodBg}/>
      </div>
    </Fragment>
  );
};

export default Header;
