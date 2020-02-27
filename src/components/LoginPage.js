import React from "react";
import Authentication from '../auth/Authentication'
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Badge, Button } from 'react-bootstrap'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            userId: 0,
            paswd: ''
        }
    }

    validateLogin = (e) => {
        e.preventDefault();
        const userId = e.target.elements.userId.value
        const paswd = e.target.elements.paswd.value

        if ((parseInt(userId) === 5495) && (paswd === '123')) {
            this.props.history.push("/NewMRO")
            Authentication.isAuthenticated = !Authentication.isAuthenticated
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }
    render() {
        let errMsg = this.state.isInvalid ? 'wrong information' : ''
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1><Badge variant="secondary">Login Page</Badge></h1>
                        <br /><br />{errMsg}<br /><br />
                        <Form onSubmit={(e) => this.validateLogin(e)}>
                            <Form.Group controlId="formBasicUserID" >
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your id" name="userId" />
                                <Form.Text className="text-muted">We'll never share your information with anyone else.</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="paswd" />
                            </Form.Group>
                            <Button type="submit" value="Login" name="submit" variant="dark">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default withRouter(LoginPage);
