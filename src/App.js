import React from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // "userId": 1,
      // "id": 1,
      // "title": ''
      // "body":'' 
      // material: [
      //   { id: 'Tania', title: 'floppydiskette', body: 'floppydiskette' },
      //   { id: 'Timm', quantity: 'zeitgeist' },
      //   { id: 'Craig', quantity: 'siliconeidolon' },
      // ],
      material: [],
      results: [],
      query: '',
    }
  }
  // componentDidMount() {
  //   //    https://jsonplaceholder.typicode.com/posts?userId=1
  //   // Will return all the posts that belong to the first user
  //   fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       this.setState({ material: json }
  //       )
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.material !== this.state.material) {
      this.resetSearch()
    }
  }

  handleSearchChange = event => {
    const value = event.target.value;
    const results = this.state.material.filter(m => m.id.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      query: value,
      results: results,
    });

  }

  resetSearch = () => {
    const results = this.state.material.filter(m => m.id.toLowerCase().includes(this.state.query.toLowerCase()))
    this.setState({ results })
  }

  getMaterialById = id => {
    const { material } = this.state
    const u = material.filter(user => user.id === id)
    return u[0]
  }

  addRow = user => {
    const { material } = this.state
    this.setState({ material: [...material, user] })
  }

  updateRow = (id, updatedUser) => {
    const { material } = this.state
    this.setState({
      material: material.map(user => (user.id === id ? updatedUser : user)),
    })
  }

  deleteRow = id => {
    const { material } = this.state
    this.setState({
      material: material.filter(user => user.id !== id),
    })
  }

  render() {
    const data = this.state.results.length === 0 && !this.state.query ? this.state.material : this.state.results
    return (
      <>
        <Header />
        <Router
          data={data}
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