import React from 'react';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
// import NewMRO from './components/NewMaterialRequest';
// import DisplayMRO from './components/DisplayMaterialRequest';
// import AllMRO from './components/MROHistory';
// import Logout from './components/Logout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          {/* <List todos={this.state.todos} /> */}

          {/* <h3>App</h3> */}
          {/* <nav>
            <Link to="/newMRO">New Material Request</Link>
            {'  ||  '}
            <Link to="/myhistory">Material Request Ordr History</Link>
            {'  ||  '}
            <Link to="/Logout">Logout</Link>
          </nav> */}
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/welcome/:userid" component={WelcomePage} />
            <Route path="/logout" component={LoginPage} />
            {/* <Route path="/newMRO" component={NewMRO} /> */}
            {/* <Route path="/myhistory" component={AllMRO} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}