import React from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../auth/Authentication'
import Nav from 'react-bootstrap/Nav'

export default class Header extends React.Component {
    //when the user clicked to the logout link, change the Auth to false
    logout = (e) => { Authentication.isAuthenticated = !Authentication.isAuthenticated }

    render() {
        return (
            <div>
                <h1>
                    Welcome to the Warehouse solution
                </h1>
                <hr />
                <br />
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link><Link to="newMRO">New Material Request</Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link><Link to="myhistory">Material Request Ordr History</Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link><Link to="Help">Help?</Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link><Link onClick={(e) => this.logout(e)} to="logout">Logout</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
                <br />
                <br />
            </div>
        );
    }
}
