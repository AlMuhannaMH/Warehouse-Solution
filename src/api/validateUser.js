import React from 'react'
// import LoginPage from '../components/LoginPage'

// Get all records where userID mache
// from sheet "Sheet1"
export default class validateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    // console.log(LoginPage);

    componentDidMount() {
        const url = ''
        fetch(url)
            .then((response) => {
                console.log(response);

                return response.json()
            }).then((json) => {
                console.log(json);
                this.setState({ data: json });
            });
    }
    renderData() {
        return this.state.data.map((row) =>
            <div key={row.id}>{row.name} {row.score}</div>
        );
    }
    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}
