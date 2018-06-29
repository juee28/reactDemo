import React, { Component } from 'react';
import API from '../../Api';
import Input from '../Input/Input';
import './Users.css';

class NewUser extends Component {

    constructor(props) {

        super(props);
        this.ref = React.createRef();
        this.state = {
            user: {
                name: {
                    value: '',
                    isValid: true,
                    type: 'text',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Enter name',
                    validation: {
                        required: true
                    }
                },
                email: {
                    value: '',
                    isValid: true,
                    type: 'email',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Enter email',
                    validation: {
                        required: true,
                        isEmai: true
                    }
                },
                phone: {
                    value: '',
                    isValid: true,
                    type: 'phone',
                    label: 'Phone',
                    name: 'phone',
                    placeholder: 'Enter phone',
                    validation: {
                        required: true,
                        isNumeric: true
                    }
                },
                company: {
                    value: '',
                    isValid: true,
                    type: 'text',
                    label: 'Company Name',
                    name: 'company',
                    placeholder: 'Enter Company Name',
                    validation: {
                        required: true
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
            let newUser = {};
            for (let element in this.state.user) {
                newUser[element] = this.state.user[element].value
            }
            API.post('users', newUser)
                .then(res => {
                    alert('SuccessFully Added!!!!');
                    this.props.onModalClose();
                }).catch((error) => console.error(error));
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
        if (obj.validation.isEmai) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value);
        }
        if (obj.validation.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value);
        }
        return isValid;
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.onModalClose();
    }

    componentDidMount() {
        if (this.ref.current) {
            this.ref.current.focus()
        }
    }

    render() {
        const ref = React.createRef();
        let user = []
        for (let element in this.state.user) {
            user.push(this.state.user[element]);
        }
        return (
            <div className="NewUser">
                <h4 className="title">NewUser</h4>
                <form className="text-left">
                    {
                        user.map((user, index) => (<Input iref={index == 0 ? this.ref : null} key={index} element={user} handleChange={(e) => this.handleChange(e)} />))
                    }
                    <button className="btn btn-primary margin10" onClick={(e) => this.handleSubmit(e)}>Add</button>
                    <button className="btn btn-primary margin10" onClick={(e) => this.handleCancel(e)}>Cancel</button>
                </form>

            </div>
        );
    }
}

export default NewUser;
