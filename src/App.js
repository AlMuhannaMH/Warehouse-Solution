// import React from 'react';
// import LoginPage from './components/LoginPage';
// import NewMRO from './components/NewMaterialRequest';
// import AllMRO from './components/MROHistory';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isLoggedIn: false }
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn
//     let nav;
//     if (isLoggedIn) {
//       nav = (<nav>
//         <Link to="/newMRO">New Material Request</Link>
//         {'  ||  '}
//         <Link to="/myhistory">Material Request Ordr History</Link>
//         {'  ||  '}
//         <Link to="/logout">Logout</Link>
//       </nav>)
//     } else {
//       nav = <nav />;
//     }
//     return (
//       <BrowserRouter>
//         <div>
//           {nav}
//           <Switch>
//             <Route exact path="/" component={() => <LoginPage isLoggedIn={this.state.isLoggedIn} />} />
//             <Route path="/NewMRO" component={NewMRO} />
//             <Route path="/logout" component={LoginPage} />
//             <Route path="/myhistory" component={AllMRO} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
import React, { Component } from 'react';
import './App.css';
import Continue from './components/Continue';
import Login from './components/Login';
import Table from './components/Table';
import Profile from './components/Profile';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function loggedIn() {
  return !!localStorage.getItem('token');
}
class App extends Component {
  render() {
    const { location } = this.props.location;
    return (
      <div className="App">
        <BrowserRouter  >
          <Switch>
            <Route exact path="/" component={Login} />
            <Route
              exact
              location={location}
              path="/continue"
              component={() =>
                loggedIn() ? <Continue /> : <Redirect to="/" />}
            />
            <Route
              exact
              location={location}
              path="/home"
              component={() =>
                loggedIn() ? <Table /> : <Redirect to="/" />}
            />
            <Route
              exact
              location={location}
              path="/profile"
              component={() =>
                loggedIn() ? <Profile /> : <Redirect to="/" />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
};

export default App;