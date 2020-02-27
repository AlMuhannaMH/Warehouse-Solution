import React from 'react'
import { Container, Row, Col, Form, Badge, Button } from 'react-bootstrap'

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
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1><Badge variant="secondary">Update Material Request Order</Badge></h1>
                        <br /><br />
                        <Form onSubmit={this.handleUserSubmit}>
                            <Form.Group controlId="nmro.MaterialCode">
                                <Form.Label>Material Code</Form.Label>
                                <Form.Control label="title"
                                    name="title"
                                    value={title}
                                    onChange={this.handleUserChange} />
                            </Form.Group>

                            <Form.Group controlId="nmro.Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea"
                                    label="body"
                                    name="body"
                                    value={body}
                                    onChange={this.handleUserChange} />
                            </Form.Group>
                            <Form.Group controlId="nmro.Quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control label="id"
                                    name="id"
                                    value={id}
                                    onChange={this.handleUserChange} />
                            </Form.Group>
                            <Button type="submit" content="Submit" variant="dark" >Update</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}
