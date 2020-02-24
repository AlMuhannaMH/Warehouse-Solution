import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Authentication from '../Authentication'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
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
                <Link to="Help">Help</Link>
                {'  ||  '}
                <Link onClick={(e) => this.logout(e)} to="logout">Logout</Link>
                <br />
                <br />
            </div>
        );
    }
}
export default Header;
