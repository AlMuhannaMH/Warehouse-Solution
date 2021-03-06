import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NewMRO from './components/NewMaterialRequest';
// import ShowMRO from './components/DisplayMaterialRequest';
import AllMRO from './components/MROHistory';
import Help from './components/Help';
import Authentication from './auth/Authentication';
import Search from './components/Search'

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
                    component={() => <LoginPage />} />
                <Route
                    path="/logout"
                    component={() => <LoginPage />} />
                <PrivateRoute
                    path="/NewMRO"
                    component={() => <NewMRO handleNewRow={this.props.handleNewRow} />} />
                <PrivateRoute
                    path="/myhistory"
                    component={() =>
                        <>
                            <Search
                                value={this.props.value}
                                onChange={this.props.onChange} />
                            <AllMRO
                                data={this.props.data}
                                deleteRow={this.props.deleteRow}
                                updateRow={this.props.updateRow}
                                getMaterialById={this.props.getMaterialById}
                            />
                        </>} />
                {/* <PrivateRoute
                    path="/myhistory"
                    component={ShowMRO} /> */}
                <Route
                    path="/Help"
                    component={Help} />
            </Switch>
        );
    }
}