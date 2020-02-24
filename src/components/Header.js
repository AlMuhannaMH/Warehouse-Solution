import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    login() { }
    logout() { }
    render() {
        return (
            <div>
                <Link to="newMRO">New Material Request</Link>
                {'  ||  '}
                <Link to="myhistory">Material Request Ordr History</Link>
                {'  ||  '}
                <Link to="Help">Help</Link>
                {'  ||  '}
                <Link to="logout">Logout</Link>
                <br />
                <br />
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Header;
