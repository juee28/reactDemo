import React, { Component } from 'react';
import Input from '../Input/Input';
import './Login.css';

class Login extends Component {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			user: {
				name: {
					value: '',
					isValid: true,
					type: 'text',
					label: 'Username',
					name: 'name',
					placeholder: 'Enter Username',
					validation: {
						required: true
					}
				},
				password: {
					value: '',
					isValid: true,
					type: 'password',
					label: 'Password',
					name: 'password',
					placeholder: 'Enter password',
					validation: {
						required: true
					}
				}
			},
			submit: false
		};

	}

	componentDidMount() {
		if (this.ref.current) {
			this.ref.current.focus()
		}
	}

	handleChange = (event) => {
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

	handleSubmit = (event) => {
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

	validation(name, value) {
		let isValid = true;
		const obj = this.state.user[name];
		if (obj.validation == null) {
			return true
		}
		if ((value).trim() == '') {
			isValid = false
		}

		return isValid;

	}

	render() {
		let user = []
		for (let element in this.state.user) {
			user.push(this.state.user[element]);
		}
		return (
			<div className="Login">
				<h4 className="title">Login</h4>
				<div className='login-page'>
					<form>
						{
							user.map((user, index) => (<Input iref={index == 0 ? this.ref : null} key={index} element={user} handleChange={(e) => this.handleChange(e)} />))
						}
						<br />
						<button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default (Login);

