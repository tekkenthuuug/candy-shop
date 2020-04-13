import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import CartCounter from "../CartCounter/CartCounter";

import { ROUTES } from '../../utils/constants';

import './SideBar.scss';

const SideBar = ({ setSideBar }) => {
  const sidebarRef = useRef(null);
  const drawerRef = useRef(null);

  const handleCloseSideBar = () => {
    sidebarRef.current.classList.add('sidebar--closing');
    drawerRef.current.classList.add('drawer--closing');

    setTimeout(() => {
      setSideBar(false);
    }, 300);
  };
  return (
    <div className="drawer" onClick={handleCloseSideBar} ref={drawerRef}>
      <div className="sidebar" ref={sidebarRef}>
        <span className="sidebar__close" onClick={handleCloseSideBar}>
          &#10006;
        </span>
        <Link className="sidebar__link" to={ROUTES.home}>
          Home
        </Link>
        <Link className="sidebar__link" to={ROUTES.shop}>
          Shop
        </Link>
        <Link className="sidebar__link" to={ROUTES.cart} style={{ position: "relative" }}>
          Cart
          <div className="sidebar__cart-wrap">
            <CartCounter />
          </div>
        </Link>
        <Link className="sidebar__link" to={ROUTES.about}>
          About us
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
