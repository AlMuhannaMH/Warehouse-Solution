import React from 'react';
import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
import AllMRO from './components/MROHistory';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          {/* {nav} */}
          <Switch>
            <Route
              exact path="/"
              component={LoginPage} />
            <Route
              path="/NewMRO"
              component={NewMRO} />
            <Route
              path="/logout"
              component={LoginPage} />
            <Route
              path="/myhistory"
              component={AllMRO} />
          </Switch>
        </div>
      </Router>
    );
  }
}
