import React from 'react';

import logo from '../../logo.svg';
import './Header.css';


const Header = (props) => {
	return (
		<div className="Header">
			<header className="App-header">
				<h1 className="App-title">	<img src={logo} className="App-logo" alt="logo" />Welcome to React</h1>
			</header>
		</div>
	);
}


export default Header;
