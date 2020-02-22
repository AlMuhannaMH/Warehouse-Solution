import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <ul>
                    <li><a href="https://www.wh.com/">Help</a></li>
                    <li><a href="https://www.wh.com/">Admin Panel</a></li>
                    <li><a href="https://www.wh.com/">Logout</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Warehouse Solution</p>
            </div>
        </div>
    )
}


export default Footer
