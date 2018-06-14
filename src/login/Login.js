import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  option(){

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className="Login">
        <div className='login-page'>
          <form onSubmit={this.handleSubmit}>
            <div className="label">
              <label>Email: </label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>Password: </label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>Name: </label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>State: </label>
              <input type="text" name="state" value={this.state.state} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>Phone: </label>
              <input type="phone" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control"/>
            </div>
             <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

