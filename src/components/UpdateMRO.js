import React from 'react'
import { Form, Button, Modal, } from 'react-bootstrap'

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
            const materialRequestOrder = this.props.getMaterialById(this.props.id)
            this.setState({
                form: {
                    title: materialRequestOrder.title,
                    body: materialRequestOrder.body,
                    id: materialRequestOrder.id,
                },
            })
        }
    }

    handleUserChange = (e) => {
        const { name, value } = e.target
        this.setState({
            form: { ...this.state.form, [name]: value },
        })
    }

    handleUserSubmit = (e) => {
        e.preventDefault()
        const { id, title, body } = this.state.form
        const { updateRow } = this.props
        const updatedUser = { title, body, id, }
        updateRow(this.props.id, updatedUser)
        this.props.onClose()
    }

    render() {
        const { title, body, id } = this.state.form
        return (
            // <div>
            //     <h1>Update Material Request Order</h1>
            //     <div>
            //         <form onSubmit={this.handleUserSubmit}>
            //             <div>
            //                 <label>title</label>
            //                 <input label="title"
            //                     name="title"
            //                     value={title}
            //                     onChange={this.handleUserChange} />
            //             </div>
            //             <div>
            //                 <label>body</label>
            //                 <input label="body"
            //                     name="body"
            //                     value={body}
            //                     onChange={this.handleUserChange} />
            //             </div>
            //             <div>
            //                 <label>quantity</label>
            //                 <input
            //                     label="id"
            //                     name="id"
            //                     value={id}
            //                     onChange={this.handleUserChange}
            //                 />
            //             </div>
            //             <button type="submit" content="Submit" />
            //         </form>
            //     </div>
            // </div>
            <Modal open={this.props.isOpen} onClose={this.props.onClose} closeIcon>
                <Modal.Header>Update</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Form.Input label="title"
                                name="title"
                                value={title}
                                onChange={this.handleUserChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="body"
                                name="body"
                                value={body}
                                onChange={this.handleUserChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="id"
                                name="id"
                                value={id}
                                onChange={this.handleUserChange} />
                        </Form.Field>
                        <Button type="submit" content="Submit" />
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }

}

// import React, { Component } from 'react'
// import { Form, Modal, Button } from 'semantic-ui-react'

// class Edit extends Component {
//     initialState = {
//         form: {
//             name: '',
//             username: '',
//         },
//     }

//     state = this.initialState

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.id !== this.props.id) {
//             const user = this.props.getUserById(this.props.id)

//             this.setState({
//                 form: {
//                     name: user.name,
//                     username: user.username,
//                 },
//             })
//         }
//     }

//     handleChange = event => {
//         const { name, value } = event.target

//         this.setState({
//             form: { ...this.state.form, [name]: value },
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()

//         const { name, username } = this.state.form
//         const { updateRow } = this.props

//         const updatedUser = {
//             name,
//             username,
//         }

//         updateRow(this.props.id, updatedUser)
//         this.props.onClose()
//     }

//     render() {
//         return (

//         )
//     }
// }

// export default Edit
