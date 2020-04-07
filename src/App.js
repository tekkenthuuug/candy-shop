import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../src/components/Navigation/Navigation';
import Homepage from '../src/containers/Homepage/Homepage';
import Shop from './containers/Shop/Shop';
import About from './containers/About/About'
import Footer from '../src/components/Footer/Footer';

import { ROUTES } from '../src/utils/constants';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Route exact path={ROUTES.home} component={Homepage} />
        <Route path={ROUTES.shop} component={Shop} />
        <Route path={ROUTES.about} component={About} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
