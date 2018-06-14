import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Login  from './login/Login';

class App extends Component {
  constructor(props) {
    super(props);
      var states = [
        {id:1, name: "Gujarat"},
        {id:2, name: "Maharashtra"},
        {id:3, name: "Kerala"},
        {id:4, name: "Uttar Pradesh"},
        {id:5, name: "Delhi"},
        {id:6, name: "Punjab"},
        {id:7, name: "Rajasthan"}
      ]
  }

  render() {
    return (
      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login states={this.states}/>
      </div>
    );
  }
}

export default App;


