import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'

const Welcome = (props) => {
  const name = props.location.user ? props.location.user.name.value : '';
  return (
    <div className="Welcome">
      <label className="user-name">{name}</label>
      <div className="row margin0">
        <div className="col-md-2">
          <div className="app">
            <Link to='/Category'>
              <p>Click Here</p>
            </Link>
          </div>
        </div>
        <div className="col-md-2">
          <div className="app">
            <Link to='/TempConvert'>
              <p>Temp Convert</p>
            </Link>
          </div>
        </div>
        <div className="col-md-2">
          <div className="app">
            <Link to='/Todo'>
              <p>TODO</p>
            </Link>
          </div>
        </div>
        <div className="col-md-2">
          <div className="app">
            <Link to='/Post'>
              <p>Post</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
