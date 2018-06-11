import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import NewTempRob from '../components/NewTempRob';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchbox: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }


  // When the user clicks on the button, open the modal 
  ModalToggleOnclick = () => {
      const modal = document.getElementById('myModal');
      if (modal.style.display === "block"){
        modal.style.display = "none";
        return
      }
        modal.style.display = "block";
  }

  SubmitTemp = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const tempRobo = {
        id: (this.state.robots.length)+1,
        name: data.get('inputName'),
        email: data.get('inputEmail')
      }
      this.setState({ robots: this.state.robots.concat([tempRobo]) })
      
  }

  SearchBoxChange = (event) => {
      this.setState({searchbox : event.target.value})
  }

  render() {
    const {robots, searchbox} = this.state;
    const robotFiltered = robots.filter((robot) => robot.name.toLowerCase().includes(searchbox.toLowerCase()));

    return !robots.length ?
      <h1 className='big'> Loading... </h1> :
    (
      <div className='tc'>
        <h1 className='big'> Robos </h1>
        <SearchBox searchChange={this.SearchBoxChange} />
        <button id="myBtn" onClick={this.ModalToggleOnclick} className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br4">Add Robo</button>
        <div className='tc mt2'>
          <Scroll>
            <CardList robots={ robotFiltered }/>
          </Scroll>
        </div>
        <NewTempRob mtonlick={this.ModalToggleOnclick} submit={this.SubmitTemp} />
      </div>
    );
    
  }
}

export default App;
