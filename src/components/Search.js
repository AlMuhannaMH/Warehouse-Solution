import React from 'react';
import { Form } from 'react-bootstrap'

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <Form.Control type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder="Search" />

            </div>
        );
    }
}
