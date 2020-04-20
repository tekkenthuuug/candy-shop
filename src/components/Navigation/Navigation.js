import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import logo from '../../img/logo.png';
import { ROUTES } from '../../utils/constants';

import './Navigation.scss';
import CartSmall from '../CartSmall/CartSmall';

const Navigation = () => {
  const history = useHistory();
  const { pathname } = history.location;

  const isSelected = (route) => {
    return route === pathname ? 'nav__links-container--selected' : undefined;
  };

  return (
    <nav className="nav">
      <Link to={ROUTES.home} className="nav__logo">
        <img src={logo} alt="Sugar daddies logo" />
      </Link>
      <BurgerMenu />
      <div className="nav__links-container">
        <ul>
          <li>
            <Link to={ROUTES.home} className={isSelected(ROUTES.home)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={ROUTES.shop} className={isSelected(ROUTES.shop)}>
              Shop
            </Link>
          </li>
          <li>
            <CartSmall />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);
