import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Help = () => {
    return (
        <Alert variant="success">
            <Alert.Heading><h1><strong>Support </strong>– professional help</h1></Alert.Heading>
            <br />
            <p>We are not only dedicated to developing expertly engineered products that provide the
                    best possible value to our clients and their enterprise processes, but also to delivering the highest
                    degree of qualified technical support and services. Supporting you on an individual basis helps ensure
                    that you can use all the software products we make successfully and with zero constraints – even years
                    after they were first installed. You can reach AlMuhannaMHVision Support by phone daily from 09:00 to 17:00 hours
                    (GMT+3) and by email around the clock. Moreover, you can look forward to speaking with your personal representative,
                    not with some anonymous call center agent.</p>
            <br />
            <br />
            <hr />
            <h2>Need help? Connect with us and we will gladly assist you.</h2>
            <br />
            <p className="mb-0">
                <p>Telephone: +966 50 000 0005</p>
                <p>Email: AlMuhannaMH@Outlook.com</p>
            </p>
        </Alert>
    )
}

export default Help;