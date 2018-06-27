import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../../Api';

import './Users.css';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: null
    }
  }

  componentDidMount() {
  	if(this.props.match.params.id){
  		 API.get('users/' + this.props.match.params.id)
	      .then(res => {
	        const userDetail = res.data;
	        this.setState({
	          userDetail: userDetail
	        })
	      }).catch((error) => console.error(error));
  	}
  }

  back = id => {
      this.props.history.push('/users/' + id);
  }

  render() {
  	let userDetail = 'Loading....';
  	if(this.state.userDetail){
  		userDetail = (
  			<div className="userdetail">
	        	<h5>{this.state.userDetail.name}</h5>
	        	<hr/>
	        	<p>Contact</p>
	        	<div className="detail">
	        		<label className="bold">Email: </label> {this.state.userDetail.email}<br/>
	        		<label className="bold">Website: </label> {this.state.userDetail.website}<br/>
	        	</div>
	        	<hr/>
	        	<p>Company</p>
	        	<div className="detail">
	        		<label className="bold">Name: </label> {this.state.userDetail.company.name}<br/>
	        	</div>
	        </div>
  		)
  	}
    return (
      <div className="UserDetail">
        <h4 className="title">UserDetail</h4>
        {userDetail}
        <div>
        	<Redirect to="/users"><button type="button" class="btn btn-primary">Back</button></Redirect>
        </div>
      </div>
    );
  }
}

export default UserDetail;
