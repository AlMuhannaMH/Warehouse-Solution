import React from "react";
import Authentication from '../Authentication'
import ValidateUser from '../api/ValidateUser'
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            userId: '',
            paswd: ''
        }
    }

    validateLogin = (e) => {
        e.preventDefault();
        const userId = e.target.elements.userId.value
        const paswd = e.target.elements.paswd.value

        // console.log(ValidateUser.renderData(userId, paswd));
        // console.log(<v
        // alidateUser userId = { userId } paswd = { paswd } />);

        if ((userId == 11) && (paswd == '123')) {

            // if (ValidateUser.renderData(userId, paswd)) {
            // if () {
            this.props.history.push("/NewMRO")
            Authentication.isAuthenticated = !Authentication.isAuthenticated
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }
    render() {
        let errMsg = this.state.isInvalid ? 'wrong information' : ''
        return (
            <>
                <h1>Login Page</h1>
                <hr />
                <form method="post" onSubmit={(e) => this.validateLogin(e)}>
                    <fieldset>
                        <legend><strong>Login</strong></legend>
                        {errMsg}
                        <br />
                        <label htmlFor="userId">User ID: </label>
                        <input type="text" name="userId" />
                        <br />
                        <label htmlFor="paswd">Password: </label>
                        <input type="password" name="paswd" />
                        <br />
                        <br />
                        <input type="submit" Value="Login" name="submit" />
                    </fieldset>
                </form>
            </>
        );
    }
}


// import React from 'react';

// export default class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             dataInfo: [],
//             userId: '',
//             paswd: '',
//             isInvalid: false,

//         };
//     }

//     validateLogin = (e) => {
//         e.preventDefault();
//         const userId = this.state.userId
//         const paswd = this.state.paswd

//         this.setState({
//             dataInfo: [...this.state.dataInfo, userId, paswd],
//             userId: '',
//             paswd: '',
//         });

//         if ((userId == 11) && (paswd == '123')) {
//             this.props.history.push("/NewMRO")
//             Authentication.isAuthenticated = !Authentication.isAuthenticated
//         } else {
//             this.setState({
//                 isInvalid: true
//             });
//         }
//     }

//     onTextChange = (e) => {
//         this.setState({
//             userId: e.target.elements.userId.value,
//             paswd: e.target.elements.paswd.value
//         });
//     }

//     render() {
//         let errMsg = this.state.isInvalid ? 'wrong information' : ''
//         return (
//             <>
//                 <ValidateUser dataInfo={this.state.dataInfo} />
//                 <h1>Login Page</h1>
//                 <hr />
//                 <form method="post" onSubmit={(e) => this.validateLogin(e)}>

//                     <fieldset>
//                         <legend><strong>Login</strong></legend>
//                         {errMsg}
//                         <br />
//                         <label htmlFor="userId">User ID: </label>
//                         <input type="text"
//                             name="userId"
//                             placeholder="Type an Item Here!"
//                             value={this.state.userId}
//                             onChange={this.onTextChange}
//                         />
//                         <br />
//                         <label htmlFor="paswd">Password: </label>
//                         <input type="text"
//                             name="userId"
//                             placeholder="Type an Item Here!"
//                             value={this.state.paswd}
//                             onChange={this.onTextChange}
//                         />
//                         <br />
//                         <br />
//                         <input type="submit" value="Login" name="submit" />
//                     </fieldset>
//                 </form>
//             </>
//         );
//     }
// }

// export default class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { data: { uid: '', password: '' } };
//     }

//     validateLogin(e) {
//         fetch("https://sheetsu.com/apis/v1.0dt/020b2c0f/search?score=42")
//             .then((response) => {
//                 return response.json()
//             }).then((json) => {
//                 this.setState({ data: json });
//             });
//     }

//     renderData() {
//         return this.state.data.map((row) =>
//             <div key={row.id}>{row.name} {row.score}</div>
//         );
//     }

//     render() {
//         return (

//             <form onSubmit={(e) => this.validateLogin(e)}>
//                 <fieldset>
//                     <legend><strong>Login</strong></legend>
//                     {/* {errMsg} */}
//                     <br />  
//                     <label htmlFor="uid">User ID: </label>
//                     <input
//                         type="text"
//                         name="uid"
//                         value={this.state.data.uid}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />      
//                     <label htmlFor="password">Password: </label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={this.state.data.password}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                     <br />
//                     <input type="submit" value="Login" name="submit" />
//                 </fieldset>
//             </form>
//         );
//     }
// }
