import React from 'react'
import { withRouter } from 'react-router-dom';
class NewMaterialRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: { userId: 1, id: '', title: '', body: '', },
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
        const { id, title, body, } = this.state.form
        const { addRow } = this.props
        const newUser = { userId: 1, id, title, body, }
        addRow(newUser)
        this.setState(this.state)
        this.props.history.push("/myhistory")
    }

    render() {
        const { id, title, body } = this.state.form
        return (
            <div>
                <h1>Create New Material Request</h1>
                <div>
                    <form onSubmit={this.handleUserSubmit}>
                        <div>
                            <label>title</label>
                            <input
                                label="title"
                                name="title"
                                value={title}
                                onChange={this.handleUserChange}
                                autoFocus={true}
                            />
                        </div>
                        <div>
                            <label>body</label>
                            <input
                                label="body"
                                name="body"
                                value={body}
                                onChange={this.handleUserChange}
                            />
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
                        <button type="submit" content="Submit" disabled={!title || !body || !id} />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewMaterialRequest)
