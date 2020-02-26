import React from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../auth/Authentication'
import Nav from 'react-bootstrap/Nav'

//useHistory 
export default class Header extends React.Component {
    logout = (e) => {
        Authentication.isAuthenticated = !Authentication.isAuthenticated
    }
    render() {
        return (
            <div>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link> <Link to="newMRO">New Material Request</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>  <Link to="myhistory">Material Request Ordr History</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>  <Link to="Help">Help?</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>    <Link onClick={(e) => this.logout(e)} to="logout">Logout</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}


//     <Link to="newMRO">New Material Request</Link>
//                 { '  ||  ' }
// <Link to="myhistory">Material Request Ordr History</Link>
// { '  ||  ' }
// <Link to="Help">Help?</Link>
// { '  ||  ' }
// <Link onClick={(e) => this.logout(e)} to="logout">Logout</Link>
//     <br />
//     <br />