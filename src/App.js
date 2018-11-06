import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Vlad', age: 12},
      {name: 'Nik', age: 29}
    ]
  }

  changeName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Nik', age: 29 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.changeName('Name')}>Switch name</button>
        <Person click={this.changeName.bind(this, 'Max')} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person> Valera </Person>
        <Person>Valera 2 </Person>
      </div>
    );
  }
}

export default App;
