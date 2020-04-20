import React, { useState, Fragment } from 'react'
import SideBar from "../SideBar/SideBar";

import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [sideBarOpened, setSideBar] = useState(false);

  return (
    <Fragment>
      {sideBarOpened && <SideBar setSideBar={setSideBar} />}
      <div className="burger-menu" onClick={() => setSideBar(true)}>
        <div className="burger-menu__tilts">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Fragment>
  )
}

export default BurgerMenu
