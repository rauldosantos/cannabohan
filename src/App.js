import React , {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Products from "./pages/Products";


const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/products/:id" component={Products} />
      <Route path="/topics" component={Topics} />
    </Fragment>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Routes;
