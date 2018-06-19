import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login  from './login/Login';
import Header from './header/Header';
import Welcome from './welcome/Welcome';
import Category from './category/Category';

class App extends Component {

  render() {
    const states = [
      {id:1, name: "Gujarat"},
      {id:2, name: "Maharashtra"},
      {id:3, name: "Kerala"},
      {id:4, name: "Uttar Pradesh"},
      {id:5, name: "Delhi"},
      {id:6, name: "Punjab"},
      {id:7, name: "Rajasthan"}
    ]
  
    return (
      <div className="App">
         <Header />
           <Switch>
            <Route exact path='/' render={(props) => (
              <Login states={states}/>
            )}/>
            <Route path='/Home' component={Welcome}/>
            <Route path='/Category' component={Category} />
          </Switch>
      </div>
    );
  }
}

export default App;
