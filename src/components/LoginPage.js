import React from "react";
import Authentication from '../Authentication'
import validateUser from '../api/validateUser'
export default class LoginPage extends React.Component {
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
        console.log(validateUser);

        if ((userId == 11) && (paswd == '123')) {
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
                <h1>Login Page</h1>
                <hr />
                <form method="post" onSubmit={(e) => this.validateLogin(e)}>
                    <fieldset>
                        <legend><strong>Login</strong></legend>
                        {errMsg}
                        <br />
                        <label htmlFor="userId">User ID: </label>
                        <input type="text" name="userId" />
                        <br />
                        <label htmlFor="paswd">Password: </label>
                        <input type="password" name="paswd" />
                        <br />
                        <br />
                        <input type="submit" Value="Login" name="submit" />
                    </fieldset>
                </form>
            </>
        );
    }
}
