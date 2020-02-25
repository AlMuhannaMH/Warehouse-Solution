import React from 'react';

export default class CreateMaterial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { itemid: '', title: '', description: '', inventory: '', isdisabled: false } };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        let updatedData = this.state.data;
        updatedData[event.target.name] = event.target.value

        this.setState({
            data: updatedData
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //https://docs.google.com/spreadsheets/d/e/2PACX-1vRPVdelRanlZn5gm7zxoeSgJLbCJBKqW0AXEXPcaF2PKbCrQgsLaMGNxIOE3vpQWHymd7kKsspkudmA/pubhtml

        fetch("https://sheetsu.com/apis/v1.0dt/cdc42dba4f5d/sheets/material", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state.data)
        }).then((response) => {
            return response.json()
        }).then((json) => {
            console.log(json);
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                itemid:
                <input
                    type="text"
                    name="itemid"
                    value={this.state.data.id}
                    onChange={this.handleInputChange}
                />
                <br />
                title:
                <input
                    type="text"
                    name="title"
                    value={this.state.data.name}
                    onChange={this.handleInputChange}
                />
                <br />
                description:
                <input
                    type="text"
                    name="description"
                    value={this.state.data.score}
                    onChange={this.handleInputChange}
                />
                <br />
                inventory:
                <input
                    type="text"
                    name="inventory"
                    value={this.state.data.score}
                    onChange={this.handleInputChange}
                />
                <br /><br />
                <input type="submit" />
            </form>
        );
    }
}