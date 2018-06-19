import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'

class Welcome extends Component {

  constructor(props) {
    super(props);
     
  }

  render() {

    return (
      <div className="Welcome">
        <label className="user-name">{this.props.location.user? this.props.location.user.name : ''}</label>
        <div className="app">
          <Link to='/Category'>
            <p>Click Here</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
