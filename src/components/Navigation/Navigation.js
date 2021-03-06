import React from "react";
import { Link, useHistory } from "react-router-dom";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CartSmall from "../CartSmall/CartSmall";
import Account from "../Account/Account";

import logo from "../../img/logo.svg";
import logoText from "../../img/logoText.png";

import { ROUTES, NAV_LINKS } from "../../utils/constants";

import "./Navigation.scss";

const Navigation = () => {
  const history = useHistory();
  const { pathname } = history.location;

  const isSelected = (route) => {
    return route === pathname ? "nav__links-container--selected" : undefined;
  };

  return (
    <nav className="nav">
      <Link to={ROUTES.home} className="nav__logo-container">
        <img src={logo} alt="Sugar daddies logo" className="nav__logo-img" />
        <img src={logoText} alt="Logo text" className="nav__logo-text" />
      </Link>
      <BurgerMenu />
      <div className="nav__links-container">
        <ul>
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.route}>
                <Link to={link.route} className={isSelected(link.route)}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Account history={history} />
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
