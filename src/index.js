import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import App from './App';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <HashRouter>
            <Container className="text-center">
                <Row>
                    <Col md={{ span: 11, offset: 0 }}><App /></Col>
                </Row>
            </Container>
        </HashRouter>
    </Router>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
