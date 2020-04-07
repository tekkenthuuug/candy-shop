import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../src/components/Navigation/Navigation';
import Homepage from '../src/containers/Homepage/Homepage';
import Shop from './containers/Shop/Shop';
import Footer from '../src/components/Footer/Footer';
import GoUp from '../src/components/GoUp/GoUp';

import { ROUTES } from '../src/utils/constants';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <GoUp />
        <Navigation />
        <Route exact path={ROUTES.home} component={Homepage} />
        <Route path={ROUTES.shop} component={Shop} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
