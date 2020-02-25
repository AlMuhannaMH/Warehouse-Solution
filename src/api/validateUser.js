import React from 'react';
// Get all records where score is 42
// from sheet "Sheet1"
export default class SheetsuSearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error_message: ''
        };
    }

    apiCallback() {
        const userid = this.props.dataInfo[0]
        const password = this.props.dataInfo[0]
        const url = `https://sheetsu.com/apis/v1.0dt/cdc42dba4f5d/sheets/Users/search?uid=${userid}&password=${password}`;
        fetch(url).then(response => response.json()).then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            this.setState({ data: data });
        }).then(null, error => {
            console.log(error);
            this.setState({ error_message: String(error) });

        });
    }

    renderData() {
        return <div>{this.state.error_message}
            {this.state.data.map((row) =>
                <div key={row.uid}>{row.firstName}</div>
            )}
        </div>
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
}
