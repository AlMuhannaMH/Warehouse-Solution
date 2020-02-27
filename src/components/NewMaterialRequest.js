import React from 'react'
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Badge, Button } from 'react-bootstrap'

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
        const { handleNewRow } = this.props
        const newMaterial = { userId: 1, id, title, body, }
        handleNewRow(newMaterial)
        this.setState(this.state)
        this.props.history.push("/myhistory")
    }
    handleNewRow
    render() {
        const { id, title, body } = this.state.form
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1><Badge variant="secondary">New Material Request Page</Badge></h1>
                        <br /><br />
                        <Form onSubmit={this.handleUserSubmit}>
                            <Form.Group controlId="nmro.MaterialCode">
                                <Form.Label>Material Code</Form.Label>
                                <Form.Control label="title"
                                    placeholder="MR-098-CLM"
                                    name="title"
                                    value={title}
                                    onChange={this.handleUserChange}
                                    autoFocus={true} />
                            </Form.Group>

                            <Form.Group controlId="nmro.Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea"
                                    label="body"
                                    name="body"
                                    value={body}
                                    rows="3"
                                    onChange={this.handleUserChange} />
                            </Form.Group>
                            <Form.Group controlId="nmro.Quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control label="id"
                                    name="id"
                                    value={id}
                                    onChange={this.handleUserChange} />
                            </Form.Group>
                            <Button type="submit" content="Submit" disabled={!title || !body || !id} variant="dark" >Create</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewMaterialRequest)
