import React from 'react';

import logo from '../../logo.svg';
import './Header.css';


const Header = (props) => {
	let menu = false;
	if(props.location.pathname != '/'){
		menu =true;
	}
	return (
		<div className="Header">

			<header className="App-header">
			{
				menu && <div className="togglebtn" onClick={props.openSidebar}>menu</div>
			}
			
				<h1 className="App-title">	<img src={logo} className="App-logo" alt="logo" />Welcome to React</h1>
			</header>
		</div>
	);
}


export default Header;
