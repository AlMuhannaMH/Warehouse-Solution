import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
import CreateMaterial from './components/CreateMaterial';
import ShowMRO from './components/DisplayMaterialRequest';
import AllMRO from './components/MROHistory';
import Help from './components/Help';
import Authentication from './Authentication';

const Router = (props) => (
    <Switch>
        {/* <Route
            exact path="/"
            component={LoginPage} /> */}
        <PrivateRoute
            path="/NewMRO"
            component={NewMRO} />
        <PrivateRoute
            path="/myhistory"
            component={AllMRO} />
        <PrivateRoute
            path="/myhistory"
            component={ShowMRO} />
        <PrivateRoute
            path="/CreateMaterial"
            component={CreateMaterial} />
        <Route
            path="/Help"
            component={Help} />
        {/* <Route
            path="/logout"
            component={LoginPage} /> */}
    </Switch>

)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => Authentication.getAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)}
    />
);


export default Router;