import React, { useRef } from 'react';

import CartCounter from "../CartCounter/CartCounter";

import useClickOutside from "../../hooks/useClickOutside";

import { ROUTES } from '../../utils/constants';

import './SideBar.scss';
import { useHistory } from 'react-router-dom';

const SideBar = ({ setSideBar }) => {
  const sidebarRef = useRef(null);
  const drawerRef = useRef(null);

  const history = useHistory();

  const handleCloseSideBar = () => {
    sidebarRef.current.classList.add('sidebar--closing');
    drawerRef.current.classList.add('drawer--closing');

    setTimeout(() => {
      setSideBar(false);
    }, 300);
  };

  useClickOutside(sidebarRef, () => {
    handleCloseSideBar();
  })

  const handleRedirect = (path) => {
    history.push(path);
    handleCloseSideBar();
  }

  return (
    <div className="drawer" ref={drawerRef}>
      <div className="sidebar" ref={sidebarRef}>
        <span className="sidebar__close" onClick={handleCloseSideBar}>
          {/*
          &#10006 - HTML entity
          &#xFE0E - Modificator for changing color in Safari
          */}
          &#10006;&#xFE0E;
        </span>
        <div className="sidebar__link" onClick={() => handleRedirect(ROUTES.home)}>
          Home
        </div>
        <div className="sidebar__link" onClick={() => handleRedirect(ROUTES.shop)}>
          Shop
        </div>
        <div className="sidebar__link sidebar__cart-wrap" onClick={() => handleRedirect(ROUTES.cart)}>
            <span>
               Cart
            </span>
            <div className="sidebar__counter-wrap">
              <CartCounter position="inline-block"/>
            </div>
        </div>
        <div className="sidebar__link" onClick={() => handleRedirect(ROUTES.about)}>
          About us
        </div>
      </div>
    </div>
  );
};

export default SideBar;
