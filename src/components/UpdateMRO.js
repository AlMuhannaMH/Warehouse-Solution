import React from 'react'

export default class updatedMRO extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                userId: 1,
                id: '',
                title: '',
                body: '',
            },
        }
    }
    //When component props changed
    // DOM is refreshed
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            const user = this.props.getMaterialById(this.props.id)
            this.setState({
                form: {

                    title: user.title,
                    body: user.body,
                    id: user.id,
                },
            })
        }
    }

    handleUserChange = event => {
        const { name, value } = event.target
        this.setState({
            form: { ...this.state.form, [name]: value },
        })
    }

    handleUserSubmit = event => {
        event.preventDefault()
        const { id, title, body } = this.state.form
        const { updateRow } = this.props
        const updatedUser = {
            title,
            body,
            id,
        }
        updateRow(this.props.id, updatedUser)
        this.props.onClose()
    }

    render() {
        const { title, body, id } = this.state.form
        return (
            <div>
                <h1>Update Material Request Order</h1>
                <div>
                    <form onSubmit={this.handleUserSubmit}>
                        <div>
                            <label>title</label>
                            <input label="title"
                                name="title"
                                value={title}
                                onChange={this.handleUserChange} />
                        </div>
                        <div>
                            <label>body</label>
                            <input label="body"
                                name="body"
                                value={body}
                                onChange={this.handleUserChange} />
                        </div>
                        <div>
                            <label>quantity</label>
                            <input
                                label="id"
                                name="id"
                                value={id}
                                onChange={this.handleUserChange}
                            />
                        </div>
                        <button type="submit" content="Submit" />
                    </form>
                </div>
            </div>
        )
    }

}
