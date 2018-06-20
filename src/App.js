import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/login/Login';
import Header from './Components/header/Header';
import Welcome from './Components/welcome/Welcome';
import Category from './Components/category/Category';
import Calculator from './Components/tempConvert/Calculator';
class App extends Component {

  render() {
    const states = [
      { id: 1, name: "Gujarat" },
      { id: 2, name: "Maharashtra" },
      { id: 3, name: "Kerala" },
      { id: 4, name: "Uttar Pradesh" },
      { id: 5, name: "Delhi" },
      { id: 6, name: "Punjab" },
      { id: 7, name: "Rajasthan" }
    ]

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => (
            <Login states={states} />
          )} />
          <Route path='/Home' component={Welcome} />
          <Route path='/Category' component={Category} />
          <Route path='/TempConvert' component ={Calculator} />
        </Switch>
      </div>
    );
  }
}

export default App;
