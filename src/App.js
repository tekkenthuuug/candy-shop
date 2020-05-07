import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Homepage from "./containers/Homepage/Homepage";
import Shop from "./containers/Shop/Shop";
import Cart from "./containers/Cart/Cart";
import Order from "./containers/Order/Order";
import ItemPage from "./containers/ItemPage/ItemPage";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login/Login";

import { ROUTES } from "./utils/constants";

import { CartProvider } from "./context/CartContext";

import "./App.scss";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Route exact path={ROUTES.shop} component={Shop} />
        <Route exact path={`${ROUTES.item}/:id`} component={ItemPage} />
        <Route path={ROUTES.cart} component={Cart} />
      </CartProvider>
      <Route exact path={ROUTES.login} component={Login} />
      <Route exact path={ROUTES.home} component={Homepage} />
      <Route exact path={`${ROUTES.order}/:id`} component={Order} />
      <Footer />
    </Router>
  );
}

export default App;
