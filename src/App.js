import React from 'react';
import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
// import DisplayMRO from './components/DisplayMaterialRequest';
import AllMRO from './components/MROHistory';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {

    return (
      <Router>
        <div>
          {/* <List todos={this.state.todos} /> */}

          {/* <h3>App</h3> */}
          <nav>
            <Link to="/newMRO">New Material Request</Link>
            {'  ||  '}
            <Link to="/myhistory">Material Request Ordr History</Link>
            {'  ||  '}
            <Link to="/Logout">Logout</Link>
          </nav>

          <Route exact path="/" component={LoginPage} />
          <Route path="/newMRO" component={NewMRO} />
          <Route path="/myhistory" component={AllMRO} />
          <Route path="/Logout" component={Logout} />
        </div>
      </Router>
    );
  }
}