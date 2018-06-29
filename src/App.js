import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import Sidebar from './Component/Sidebar/Sidebar';
import Content from './Component/Content/Content';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openSidebar: false
		}
	}

	openSidebar = () => {
		this.setState({
			openSidebar: true
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
				<Header openSidebar={this.openSidebar} {...this.props} />
				<Sidebar onCloseSidebar={this.onCloseSidebar} openSidebar={this.state.openSidebar} />
				<Content onCloseSidebar={this.onCloseSidebar}/>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
