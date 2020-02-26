import React from 'react'

export default class updatedMRO extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                materialCode: '',
                quantity: '',
            },
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            const user = this.props.getMaterialById(this.props.id)

            this.setState({
                form: {
                    materialCode: user.materialCode,
                    quantity: user.quantity,
                },
            })
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
        const { updateRow } = this.props

        const updatedUser = {
            materialCode,
            quantity,
        }

        updateRow(this.props.id, updatedUser)
        this.props.onClose()
    }

    render() {
        const { materialCode, quantity } = this.state.form

        return (
            <div>
                <h1>Update Material Request Order</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>materialCode</label>
                            <input label="materialCode"
                                name="materialCode"
                                value={materialCode}
                                onChange={this.handleChange} />
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
                        <button type="submit" content="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}
