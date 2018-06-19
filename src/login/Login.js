import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import Welcome from '../welcome/Welcome';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
      name: '',
      state: '',
      phone: ''
    };
     
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.context.router.transitionTo('/Home');
    event.preventDefault();
  }

  render() {
 
    var option = this.props.states.map((sta)=> {
        return (
          <option value={sta.name} key={sta.id}>{sta.name}</option>
          )
      });  

    return (
      <div className="Login">
        <div className='login-page'>
          <form>
            <div className="label">
              <label>Email: </label>
              <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.handleChange(e)} className="form-control"/>
            </div>
            <div className="label">
              <label>Password: </label>
              <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={(e) => this.handleChange(e)} className="form-control"/>
            </div>
            <div className="label">
              <label>Name: </label>
              <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e) => this.handleChange(e)} className="form-control"/>
            </div>
            <div className="label">
              <label>State: </label>
              <select className="form-control" name="state" value={this.state.state} onChange={(e) => this.handleChange(e)} >
                <option value='' disabled>Select state</option>
                {option}
              </select>
            </div>
            <div className="label">
              <label>Phone: </label>
              <input type="phone" name="phone" placeholder="Enter phone no" value={this.state.phone} onChange={(e) => this.handleChange(e)} className="form-control"/>
            </div>
             <Link to={{ pathname: '/Home', user: this.state }}className="btn btn-primary">Submit</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

