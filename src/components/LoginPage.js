import React from 'react';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // toDoItems: [
            //     'Build a todo App',
            //     'Go home and plan to take over the world!',
            //     'Make a list of stuff to do',
            //     'Have some Ice Cream! :)',
            // ],
            newItem: '',
        };
    }

    validateLogin = (e) => {
        e.preventDefault();
        console.log('Add Item!');
        console.log(this.state.newItem);

        this.setState({
            newItem: ''
        });
    }

    onTextBoxChange = (e) => {
        console.log('On Text Change', e.target.value);

        this.setState({
            newItem: e.target.value
        });
    }

    render() {
        return (
            <>
                <h1>Login Page</h1>
                <hr />
                <form action="" onSubmit={() => this.validateLogin()}>
                    <fieldset>
                        <legend><strong>Login</strong></legend>
                        <label htmlFor="userId">User ID: </label>
                        <input type="text" id="userId"
                            Change={this.onTextBoxChange}
                            defaultValue='5495' />
                        <br />
                        <label htmlFor="userId">Password: </label>
                        <input type="text" id="userId"
                            Change={this.onTextBoxChange}
                            defaultValue='5495' />
                        <br />
                        <br />
                        <input type="submit" defaultValue="Login" name="submit" />
                    </fieldset>
                </form>
            </>
        );
    }
}
