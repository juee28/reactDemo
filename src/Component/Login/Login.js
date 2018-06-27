import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				password: {
					value: '',
					isValid: true,
					validation: {
						reqired: true
					}
				},
				name: {
					value: '',
					isValid: true,
					validation: {
						reqired: true
					}
				}
			},
			submit: false
		};

	}

	handleChange(event) {
		const element = event.target;
		const name = element.name;
		const value = (element.value).trim();
		let isValid = this.validation(name, value);
		
		this.setState({
			user: {
				...this.state.user,
				[name]: {
					...this.state.user[name],
					value: value,
					isValid: isValid
				}
			}
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		let submit = true;
		for (let element in this.state.user) {
			let isValid = this.validation(element, this.state.user[element].value);
			if (!isValid) {
				this.state.user[element].isValid = false;
				submit = false;
			}
		}
		if (submit) {
			this.props.history.push({ pathname: '/users' });
		} else {
			this.setState({
				user: this.state.user
			});
		}
	}

	validation(name, value){
		let isValid = true;
		const obj = this.state.user[name];
		if(obj.validation == null){
			return true
		}
		if ((value).trim() == '') {
			isValid = false
		}

		return isValid;
		
	}

	render() {
		return (
			<div className="Login">
			<h4 className="title">Login</h4>
				<div className='login-page'>
					<form>
						<div className="label">
							<label>Username: <span  className="red">*</span></label>
							<input type="text" name="name" placeholder="Enter Username" value={this.state.user.name.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.name.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<div className="label">
							<label>Password: <span className="red">*</span></label>
							<input type="password" name="password" placeholder="Enter password" value={this.state.user.password.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.password.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<br/>
						<button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default (Login);

