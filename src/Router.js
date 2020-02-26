import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
import UpdateMRO from './components/UpdateMRO';
import ShowMRO from './components/DisplayMaterialRequest';
import AllMRO from './components/MROHistory';
import Help from './components/Help';
import Authentication from './Authentication';

export default class Router extends React.Component {
    render() {
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest}
                render={props => Authentication.getAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)}
            />
        );
        return (
            <Switch>
                <Route
                    exact path="/"
                    component={LoginPage} />
                <PrivateRoute
                    path="/NewMRO"
                    component={() => <NewMRO addRow={this.props.addRow} />} />
                <PrivateRoute
                    path="/UpdateMRO"
                    component={UpdateMRO} />
                <Route
                    path="/logout"
                    component={LoginPage} />
                <PrivateRoute
                    path="/myhistory"
                    component={() => <AllMRO
                        data={this.props.data}
                        deleteRow={this.props.deleteRow}
                        updateRow={this.props.updateRow}
                        getUserById={this.props.getUserById}
                    />} />
                <PrivateRoute
                    path="/myhistory"
                    component={ShowMRO} />
                <Route
                    path="/Help"
                    component={Help} />
            </Switch>
        );
    }
}