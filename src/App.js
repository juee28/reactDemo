import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import Users from './Component/Users/Users';
import UserDetail from './Component/Users/UserDetail';
import Sidebar from './Component/Sidebar/Sidebar';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      openSidebar: false
	    }
	  }

	  openSidebar = () => {
	  	this.setState({
	  		openSidebar : true
	  	})
	  }

	  onCloseSidebar = () => {
	  	this.setState({
	  		openSidebar: false
	  	})
	  }
	render() {
		return (
			<div className="App">
				<Header openSidebar={this.openSidebar} {...this.props}/>
				<Sidebar onCloseSidebar={this.onCloseSidebar} openSidebar={this.state.openSidebar}/>
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

export default withRouter(App);
