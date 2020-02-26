import React from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      material: [
        { materialCode: 'Tania', quantity: 'floppydiskette' },
        { materialCode: 'Timm', quantity: 'zeitgeist' },
        { materialCode: 'Craig', quantity: 'siliconeidolon' },
      ],
      results: [],
      query: '',
    }
  }
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

  getUserById = id => {
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
    const { material, results, query } = this.state
    const data = results.length === 0 && !query ? material : results
    return (
      <>
        <Header />
        <Router
          data={data}
          addRow={this.addRow}
          updateRow={this.updateRow}
          deleteRow={this.deleteRow}
          getUserById={this.getUserById}
          value={this.state.query}
          onChange={this.handleSearchChange} />
        <Footer />
      </>
    )
  }
}