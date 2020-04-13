import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Homepage from './containers/Homepage/Homepage';
import Shop from './containers/Shop/Shop';
import About from './containers/About/About';
import Footer from './components/Footer/Footer';

import { ROUTES } from './utils/constants';

import './App.scss';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Route exact path={ROUTES.shop} component={Shop} />
      </CartProvider>
      <Route exact path={ROUTES.home} component={Homepage} />
      <Route path={ROUTES.about} component={About} />
      <Footer />
    </Router>
  );
}

export default App;
