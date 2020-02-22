import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import NewMRO from './components/NewMaterialRequest';
import DisplayMRO from './components/DisplayMaterialRequest';
import Footer from './components/Footer';
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <h1>Welcome to the Warehouse Solution</h1>
        <Login />
        <NewMRO />
        <DisplayMRO />
        <Footer />
      </div>
    );
  }
}