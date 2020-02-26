import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router />
        <Footer />
      </>
    )
  }
}
