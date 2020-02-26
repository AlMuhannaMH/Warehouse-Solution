import React from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../Authentication'
//useHistory 
export default class Header extends React.Component {
    logout = (e) => {
        Authentication.isAuthenticated = !Authentication.isAuthenticated
    }
    render() {
        return (
            <div>
                <Link to="newMRO">New Material Request</Link>
                {'  ||  '}
                <Link to="myhistory">Material Request Ordr History</Link>
                {'  ||  '}
                <Link to="UpdateMRO">Update Material Request Order</Link>
                {'  ||  '}
                <Link to="Help">Help</Link>
                {'  ||  '}
                <Link onClick={(e) => this.logout(e)} to="logout">Logout</Link>
                <br />
                <br />
            </div>
        );
    }
}
