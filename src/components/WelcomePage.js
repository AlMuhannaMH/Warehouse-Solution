import React from 'react';

export default class welcomePage extends React.Component {

    handelUserLogout = () => {
        this.props.history.push('/logout')
    }

    render() {
        const { userId } = this.props.match
        console.log(userId);
        return (
            <>
                <h1>welcome {userId}</h1>
                <hr />
                <button onClick={() => this.handelUserLogout()}>Logout</button>
            </>
        );
    }
}
