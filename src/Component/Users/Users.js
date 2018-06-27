import React, { Component } from 'react';
import UserItem from './UserItem';
import API from '../../Api';

import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    API.get('users')
      .then(res => {
        const users = res.data;
        this.setState({
          users: users
        })
      }).catch((error) => console.error(error));
  }

  onUserSelectedHandler = id => {
      this.props.history.push('/users/' + id);
  }

  render() {
    let userList = 'Loading....';
    if (this.state.users.length > 0) {
      userList = this.state.users.map((user) => (<UserItem key={user.id} user={user} onUserSelected={() => this.onUserSelectedHandler(user.id)}/>))
    }

    return (
      <div className="Users">
        <h4 className="title">Users</h4>
        <div className="row margin0">
          {userList}
        </div>
      </div>
    );
  }
}

export default Users;
