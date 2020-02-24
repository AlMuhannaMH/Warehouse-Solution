import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
import ShowMRO from './components/DisplayMaterialRequest';
import AllMRO from './components/MROHistory';
import Nav from './components/Nav';

const Router = (props) => {
    return (
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
    )
}
export default Router;