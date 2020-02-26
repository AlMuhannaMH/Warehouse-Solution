import React from 'react'
import { withRouter } from 'react-router-dom';
class NewMaterialRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                materialCode: '',
                quantity: '',
            },
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            form: { ...this.state.form, [name]: value },
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { materialCode, quantity } = this.state.form
        const { addRow } = this.props

        const newUser = {
            materialCode,
            quantity,
        }

        addRow(newUser)
        this.setState(this.state)

        this.props.history.push("/myhistory")
    }

    render() {
        const { materialCode, quantity } = this.state.form

        return (
            <div>
                <h1>Create New Material Request</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>materialCode</label>
                            <input
                                label="materialCode"
                                name="materialCode"
                                value={materialCode}
                                onChange={this.handleChange}
                                autoFocus={true}
                            />
                        </div>
                        <div>
                            <label>quantity</label>
                            <input
                                label="quantity"
                                name="quantity"
                                value={quantity}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" content="Submit" disabled={!materialCode || !quantity} />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewMaterialRequest)