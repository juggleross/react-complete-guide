import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Vlad', age: 12},
      {name: 'Nik', age: 29}
    ],
    showPersons: false
  }

  changeName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Nik', age: 29 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 22 },
        { name: 'Nik2', age: 29 }
      ]
    })
  }

  showPersonsHandler = () => {
    let showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons })
  }

  render() {
    const style = {
      backgroundColor: 'red',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <button style={style} onClick={this.showPersonsHandler}>Switch name</button>
        { this.state.showPersons ?
          <div>
            <Person click={this.changeName.bind(this, 'Max')} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person change={this.changeNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
