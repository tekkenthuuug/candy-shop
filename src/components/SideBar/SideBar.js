import React, { useRef } from "react";

import CartCounter from "../CartCounter/CartCounter";

import useClickOutside from "../../hooks/useClickOutside";

import { ROUTES, NAV_LINKS } from "../../utils/constants";

import "./SideBar.scss";
import { useHistory } from "react-router-dom";
import localToken from "../../utils/localToken";

const SideBar = ({ setSideBar }) => {
  const sidebarRef = useRef(null);
  const drawerRef = useRef(null);

  const isAuthenticated = Boolean(localToken.get());

  const history = useHistory();

  const handleCloseSideBar = () => {
    sidebarRef.current.classList.add("sidebar--closing");
    drawerRef.current.classList.add("drawer--closing");

    setTimeout(() => {
      setSideBar(false);
    }, 300);
  };

  useClickOutside(sidebarRef, () => {
    handleCloseSideBar();
  });

  const handleRedirect = (path) => {
    history.push(path);
    handleCloseSideBar();
  };

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
        {NAV_LINKS.map((link) => {
          return (
            <div
              key={link.route}
              className="sidebar__link"
              onClick={() => handleRedirect(link.route)}
            >
              {link.name}
            </div>
          );
        })}
        <div
          className="sidebar__link"
          onClick={() =>
            handleRedirect(isAuthenticated ? ROUTES.profile : ROUTES.login)
          }
        >
          {isAuthenticated ? "Profile" : "Login"}
        </div>
        <div
          className="sidebar__link sidebar__cart-wrap"
          onClick={() => handleRedirect(ROUTES.cart)}
        >
          <span>Cart</span>
          <div className="sidebar__counter-wrap">
            <CartCounter position="inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
