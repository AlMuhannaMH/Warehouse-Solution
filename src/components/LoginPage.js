import React from "react";
import Authentication from '../Authentication'
export default class LoginPage extends React.Component {
    validateLogin = (e) => {
        e.preventDefault();
        const userId = e.target.elements.userId.value
        const paswd = e.target.elements.paswd.value

        if ((userId == 11) && (paswd == '123')) {
            this.props.history.push("/NewMRO")
            // this.setState({
            //     isLoggedIn: !this.state.isLoggedIn
            // });
            Authentication.isAuthenticated = !Authentication.isAuthenticated
            // console.log(Authentication.isAuthenticated = !Authentication.isAuthenticated);

        } else {
            this.setState({
                isInvalid: !this.state.isInvalid
            });
        }
    }
    render() {
        return (
            <>
                <h1>Login Page</h1>
                <hr />
                <form method="post" onSubmit={(e) => this.validateLogin(e)}>
                    <fieldset>
                        <legend><strong>Login</strong></legend>
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
