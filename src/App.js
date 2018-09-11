import React , {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import ProductsByBrand from "./pages/ProductsByBrand";


const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/products/:idBrand" component={ProductsByBrand} />
    </Fragment>
  </Router>
);



export default Routes;
