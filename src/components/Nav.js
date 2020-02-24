
import { Link } from 'react-router-dom';
import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/newMRO">New Material Request</Link>
                {'  ||  '}
                <Link to="/myhistory">Material Request Ordr History</Link>
                {'  ||  '}
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    )
}

export default Nav