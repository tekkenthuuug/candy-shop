import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Homepage from './containers/Homepage/Homepage';
import Shop from './containers/Shop/Shop';
import Cart from "./containers/Cart/Cart";
import Footer from './components/Footer/Footer';

import { ROUTES } from './utils/constants';

import { CartProvider } from './context/CartContext';

import './App.scss';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Route exact path={ROUTES.shop} component={Shop} />
        <Route path={ROUTES.cart} component={Cart}/>
      </CartProvider>
      <Route exact path={ROUTES.home} component={Homepage} />
      <Footer />
    </Router>
  );
}

export default App;
