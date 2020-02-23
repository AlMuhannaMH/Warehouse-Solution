import React from 'react'

const DisplayMaterialRequest = () => {
    return (
        <>
            <h1>DisplayMaterialRequest</h1>
            <hr />
            <form action="" onSubmit={() => this.validateLogin()}>
                <fieldset>
                    <legend><strong>Login</strong></legend>
                    <label htmlFor="mroNumber">MRO#: </label>
                    <br />
                    <label htmlFor="mroNumber">items: </label>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                    <input type="submit" defaultValue="Login" name="submit" />
                </fieldset>
            </form>
        </>
    )
}

export default DisplayMaterialRequest
