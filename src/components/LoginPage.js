import React from 'react'

const LoginPage = () => {
    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <form action="" onSubmit={() => this.validateLogin}>
                <label htmlFor="userId">Please enter your user id: </label>
                <input type="text" id="userId"
                    value='5495' />
                <br />
                <label htmlFor="userPswd">Please enter your Password: </label>
                <input type="password" id="userPswd"
                    value='sss' />
                <br />
                <br />
                <input type="submit" value="Login" name="submit" />
            </form>
        </>
    )
}


export default LoginPage
