import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: {
					value: '',
					isValid: true, 
					validation: {
						reqired: true,
						isEmai: true
					}
				},
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
				},
				state: {
					value: '',
					isValid: true,
					validation: null
				},
				phone: {
					value: '',
					isValid: true,
					validation: {
						reqired: true,
						isNumeric: true
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
			this.props.history.push({ pathname: '/Home', user: this.state.user });
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
		if(obj.validation.isEmai){
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value);
		}
		if (obj.validation.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value);
        }

		return isValid;
		
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
							<input type="email" name="email" placeholder="Enter email" value={this.state.user.email.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.email.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<div className="label">
							<label>Password: </label>
							<input type="password" name="password" placeholder="Enter password" value={this.state.user.password.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.password.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<div className="label">
							<label>Name: </label>
							<input type="text" name="name" placeholder="Enter name" value={this.state.user.name.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.name.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<div className="label">
							<label>State: </label>
							<select className={this.state.user.state.isValid ? 'form-control' : 'invalid form-control'} name="state" value={this.state.user.state.value}
								onChange={(e) => this.handleChange(e)} >
								<option value='' disabled>Select state</option>
								{option}
							</select>
						</div>
						<div className="label">
							<label>Phone: </label>
							<input type="phone" name="phone" placeholder="Enter phone no" value={this.state.user.phone.value}
								onChange={(e) => this.handleChange(e)}
								className={this.state.user.phone.isValid ? 'form-control' : 'invalid form-control'} />
						</div>
						<button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);

