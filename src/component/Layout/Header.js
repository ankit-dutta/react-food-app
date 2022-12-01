import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import HeaderImage from '../../assets/Header1.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={HeaderImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;