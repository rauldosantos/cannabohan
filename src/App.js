import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';

import Home from './pages/Home';
import ProductsByBrand from './pages/ProductsByBrand';

const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />

      <AnimatedRoute
        path="/products/:idBrand"
        component={ProductsByBrand}
        atEnter={{ offset: -100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={styles => ({
          transform: `translateX(${styles.offset}%)`
        })}
      />
    </Fragment>
  </Router>
);

export default Routes;
