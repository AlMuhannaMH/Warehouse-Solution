import React from 'react'

const LoginPage = () => {
    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <form action="" onSubmit={() => this.validateLogin()}>
                <fieldset>
                    <legend><strong>Login</strong></legend>
                    <label htmlFor="userId">User ID: </label>
                    <input type="text" id="userId"
                        defaultValue='5495' />
                    <br />
                    <label htmlFor="userId">Password: </label>
                    <input type="text" id="userId"
                        defaultValue='5495' />
                    <br />
                    <br />
                    <input type="submit" defaultValue="Login" name="submit" />
                </fieldset>
            </form>
        </>
    )
}


export default LoginPage
