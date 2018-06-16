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
     
console.log(this.option)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit(event) {
    console.log(this.state);
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
          <form onSubmit={this.handleSubmit}>
            <div className="label">
              <label>Email: </label>
              <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>Password: </label>
              <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>Name: </label>
              <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="label">
              <label>State: </label>
              <select className="form-control" name="state" value={this.state.state} onChange={this.handleChange} >
                <option value='' disabled>Select state</option>
                {option}
              </select>
              
            </div>
            <div className="label">
              <label>Phone: </label>
              <input type="phone" name="phone" placeholder="Enter phone no" value={this.state.phone} onChange={this.handleChange} className="form-control"/>
            </div>
             <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

