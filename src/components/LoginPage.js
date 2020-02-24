import React from 'react';
import { Link } from 'react-router-dom';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isInvalid: false,
            isLoggedIn: false
        };
    }

    validateLogin = (e) => {
        e.preventDefault();
        const userId = e.target.elements.userId.value
        const paswd = e.target.elements.paswd.value

        if ((userId == 11) && (paswd == '123')) {
            this.props.history.push("/NewMRO")
            this.setState({
                isLoggedIn: !this.state.isLoggedIn
            });
        } else {
            this.setState({
                isInvalid: !this.state.isInvalid
            });
        }
    }
    render() {
        // const errMsg = this.state.isInvalid ? 'invald information' : ''
        // let nav = this.state.isLoggedIn ? <Nav /> : <nav />
        return (
            <>
                {/* {nav} */}
                <h1>Login Page</h1>
                <hr />
                <form method="post" onSubmit={(e) => this.validateLogin(e)}>
                    <fieldset>
                        <legend><strong>Login</strong></legend>
                        {/* {errMsg} */}
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
