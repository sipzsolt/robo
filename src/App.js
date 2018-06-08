import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }

  render() {
    return (
      <div className='tc'>
        <h1> Robos </h1>
        <div className='tc'>
        <CardList robots={ this.state.robots }/>
        </div>
      </div>
    );
  }
}

export default App;
