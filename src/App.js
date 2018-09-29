import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import ScrollToTop from 'react-router-scroll-top';

import Home from './pages/Home';
import ProductsByBrand from './pages/ProductsByBrand';

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Fragment>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/products/:idBrand"
          component={ProductsByBrand}
          onUpdate={() => window.scrollTo(0, 0)}
        />
      </Fragment>
    </ScrollToTop>
  </Router>
);

export default Routes;
