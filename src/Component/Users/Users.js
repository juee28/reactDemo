import React, { Component } from 'react';
import UserItem from './UserItem';
import API from '../../Api';
import Modal from '../Modal/Modal';
import NewUser from './NewUser';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false
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

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    let userList = 'Loading....';
    if (this.state.users.length > 0) {
      userList = this.state.users.map((user) => (<UserItem key={user.id} user={user} onUserSelected={() => this.onUserSelectedHandler(user.id)} />))
    }

    return (
      <div className="Users">
        <h4 className="title">Users</h4>
        <div className="text-right margin-10"><button className="btn btn-primary" onClick={this.openModal}>Add New User</button></div>
        <div className="row margin0">
          {userList}
        </div>
        {
          this.state.showModal &&
          <Modal showModal={this.state.showModal} onModalClose={this.closeModal}>
            <NewUser onModalClose={this.closeModal} />
          </Modal>
        }

      </div>
    );
  }
}

export default Users;
