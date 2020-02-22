import React from 'react';
import LoginPage from './components/LoginPage';
// import NewMRO from './components/NewMaterialRequest';
// import DisplayMRO from './components/DisplayMaterialRequest';
export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>WHS</h1>
        <LoginPage />
      </div>
    );
  }
}