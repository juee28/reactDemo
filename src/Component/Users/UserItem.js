import React from 'react';

const UserItem = (props) => {
	return (
		<div className="UserItem  col-md-6">
			<div className="user" onClick={props.onUserSelected}>
				{props.user.name}
			</div>
		</div>
	);
}


export default UserItem;
