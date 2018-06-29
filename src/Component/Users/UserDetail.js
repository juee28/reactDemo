import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../../Api';

import './Users.css';

class UserDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetail: null,
			bacck: false
		}
	}

	componentDidMount() {
		if (this.props.match.params.id) {
			API.get('users/' + this.props.match.params.id)
				.then(res => {
					const userDetail = res.data;
					this.setState({
						userDetail: userDetail
					})
				}).catch((error) => console.error(error));
		}
	}

	back = () => {
		this.setState({
			back: true
		})
	}

	deleteHandler = () => {
		API.delete('users/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					back: true
				})
				alert("SuccessFully Deleted!!!");
			}).catch((error) => console.error(error));
	}

	render() {
		if (this.state.back) {
			return (<Redirect to="/users" />)
		}
		return (
			<div className="UserDetail">
				<h4 className="title">UserDetail</h4>
				{
					this.state.userDetail ? (
						<div className="userdetailcontainer">
							<div className="userdetail">
								<h5>{this.state.userDetail.name}</h5>
								<hr />
								<p>Contact</p>
								<div className="detail">
									<label className="bold">Email: </label> {this.state.userDetail.email}<br />
									<label className="bold">Phone: </label> {this.state.userDetail.phone}<br />
									<label className="bold">Address: </label>  {this.state.userDetail.address.suite}, {this.state.userDetail.address.street}, {this.state.userDetail.address.city},   {this.state.userDetail.address.zipcode}<br />
									<label className="bold">Website: </label> {this.state.userDetail.website}<br />
								</div>
								<hr />
								<p>Company</p>
								<div className="detail">
									<label className="bold">Name: </label> {this.state.userDetail.company.name}<br />
								</div>
							</div>
							<div className="text-right">
								<button type="button" className="btn btn-danger" onClick={this.deleteHandler}>Delete</button>
								<button type="button" className="btn btn-primary" onClick={this.back}>Back</button>
							</div>
						</div>
					) : 'Loading....'

				}

			</div>
		);
	}
}

export default UserDetail;
