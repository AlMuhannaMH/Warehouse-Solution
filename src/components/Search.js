import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <input type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder="Search" />
            </div>
        );
    }
}
