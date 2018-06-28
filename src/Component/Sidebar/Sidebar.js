import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = (props) => {
	return (
		<div  className={props.openSidebar? 'open Sidebar' : 'Sidebar'}>
		<div onClick={props.onCloseSidebar} className="closeBtn">x</div>
			<ul>
				<li onClick={props.onCloseSidebar}><Link to="/users">Users</Link></li>
				<li onClick={props.onCloseSidebar}><Link to="/">Logout</Link></li>
			</ul>
		</div>
	);
}


export default Sidebar;
