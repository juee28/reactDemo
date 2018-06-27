import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import Users from './Component/Users/Users';
import UserDetail from './Component/Users/UserDetail';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Switch >
					<Route path='/' exact component={Login} /> 
					<Route path='/users/:id' component={UserDetail} />
					<Route path='/users' component={Users}/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
