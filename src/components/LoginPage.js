import React from "react";
import Authentication from '../auth/Authentication'
import { withRouter } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            userId: 0,
            paswd: ''
        }
    }

    validateLogin = (e) => {
        e.preventDefault();
        const userId = e.target.elements.userId.value
        const paswd = e.target.elements.paswd.value

        if ((parseInt(userId) === 5495) && (paswd === '123')) {
            this.props.history.push("/NewMRO")
            Authentication.isAuthenticated = !Authentication.isAuthenticated
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }
    render() {
        let errMsg = this.state.isInvalid ? 'wrong information' : ''
        return (
            <>
                <h1>
                    Welcome to the Warehouse solution
                </h1>
                <hr />
                <form onSubmit={(e) => this.validateLogin(e)}>
                    <fieldset>
                        <legend><strong><h1><Badge variant="secondary">Login</Badge></h1></strong></legend>
                        {errMsg}
                        <br />
                        <label htmlFor="userId">User ID: </label>
                        <input type="text" name="userId" />
                        <br />
                        <label htmlFor="paswd">Password: </label>
                        <input type="password" name="paswd" />
                        <br />
                        <br />
                        <input type="submit" value="Login" name="submit" />
                    </fieldset>
                </form>
            </>
        );
    }
}

export default withRouter(LoginPage);
