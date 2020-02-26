import React from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
// import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      material: [
        { materialCode: 'Tania', quantity: 'floppydiskette' },
        { materialCode: 'Timm', quantity: 'zeitgeist' },
        { materialCode: 'Craig', quantity: 'siliconeidolon' },
      ],
      // material: [],
      results: [],
      query: '',
    }
  }
  // componentDidMount() {
  //   // Will return all the posts that belong to the first user
  //   fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //       console.log(json)
  //     })

  //   // const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  //   // fetch(url).then(response => response.json()).then(data => {
  //   //   if (data.error_message) {
  //   //     throw new Error(data.error_message);
  //   //   }
  //   //   console.log('DATA: ', data);
  //   //   this.setState({ material: data });
  //   // }).then(null, error => {
  //   //   console.log(String(error))
  //   //   console.log(error)
  //   // });
  // }
  // apiCall = () => {
  //   console.log("dfgdfgfdgdgfdfgdfgdfgfd")
  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.material !== this.state.material) {
      this.resetSearch()
    }
  }

  handleSearchChange = event => {
    const value = event.target.value;
    const results = this.state.material.filter(m => m.materialCode.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      query: value,
      results: results,
    });
  }

  resetSearch = () => {
    const { material, query } = this.state

    const results = material.filter(user => {
      const regex = new RegExp(query, 'gi')
      return user.materialCode.match(regex)
    })

    this.setState({ results })
  }

  getMaterialById = id => {
    const { material } = this.state

    const u = material.filter(user => user.materialCode === id)

    return u[0]
  }

  addRow = user => {
    const { material } = this.state

    this.setState({ material: [...material, user] })
  }

  updateRow = (id, updatedUser) => {
    const { material } = this.state

    this.setState({
      material: material.map(user => (user.materialCode === id ? updatedUser : user)),
    })
  }

  deleteRow = id => {
    const { material } = this.state

    this.setState({
      material: material.filter(user => user.materialCode !== id),
    })
  }
  render() {
    const data = this.state.results.length === 0 && !this.state.query ? this.state.material : this.state.results
    return (
      <>
        <Header />
        <Router
          data={data}
          // apiCall={this.apiCall}
          updateRow={this.updateRow}
          deleteRow={this.deleteRow}
          getMaterialById={this.getMaterialById}

          addRow={this.addRow}

          value={this.state.query}
          onChange={this.handleSearchChange}
        />
        <Footer />
      </>
    )
  }
}