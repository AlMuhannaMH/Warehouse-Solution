import React from 'react'

const NewMaterialRequest = () => {
    return (
        <>

            <h1>NewMaterialRequest Page</h1>
            <hr />
            <form action="" onSubmit={() => this.validateMRO()}>
                <fieldset>
                    <legend><strong>Create New Material Request</strong></legend>
                    <label htmlFor="materialCode">Enter Material Code: </label>
                    <input type="text" id="mrCode" defaultValue='MR-01233' />
                    <select name="MROption">
                        <option defaultValue="MR-01233">MR-01233 - Blue Pen</option>
                        <option defaultValue="MR-01234">MR-01234 - Red Pen</option>
                        <option defaultValue="MR-01235">MR-01235 - Black Pen</option>
                    </select>
                    <br />
                    <label htmlFor="countite">Enter countite requested: </label>
                    <input type="text" id="mrCountite" defaultValue='1' />
                    <br />
                    <br />
                    <input type="submit" defaultValue="MRO" name="submit" />
                </fieldset>
            </form>
        </>
    )
}

export default NewMaterialRequest
