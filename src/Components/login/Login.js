import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        name: '',
        state: '',
        phone: ''
      },

      submit: false
    };

  }

  handleChange(event) {

    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit(event) {
    debugger
    this.setState({
      submit: true
    })
    event.preventDefault();
  }

  render() {

    var option = this.props.states.map((sta) => {
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
              <input type="email" name="email" placeholder="Enter email" value={this.state.user.email} onChange={(e) => this.handleChange(e)} className="form-control" />
            </div>
            <div className="label">
              <label>Password: </label>
              <input type="password" name="password" placeholder="Enter password" value={this.state.user.password} onChange={(e) => this.handleChange(e)} className="form-control" />
            </div>
            <div className="label">
              <label>Name: </label>
              <input type="text" name="name" placeholder="Enter name" value={this.state.user.name} onChange={(e) => this.handleChange(e)} className="form-control" />
            </div>
            <div className="label">
              <label>State: </label>
              <select className="form-control" name="state" value={this.state.user.state} onChange={(e) => this.handleChange(e)} >
                <option value='' disabled>Select state</option>
                {option}
              </select>
            </div>
            <div className="label">
              <label>Phone: </label>
              <input type="phone" name="phone" placeholder="Enter phone no" value={this.state.user.phone} onChange={(e) => this.handleChange(e)} className="form-control" />
            </div>
            {
              this.state.submit ? <Link to={{ pathname: '/Home', user: this.state.user }} className="btn btn-primary">Submit</Link> : <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            }

          </form>
        </div>
      </div>
    );
  }
}

export default Login;

