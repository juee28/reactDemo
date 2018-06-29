import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetail: null,
            bacck: false
        }
    }

    render() {
        return (
            <div className="label">
                <label>{this.props.element.label}:
                {
                        (this.props.element.validation != null && this.props.element.validation.required) && <span className="red">*</span>
                    }
                </label>

                <input ref={this.props.iref} type={this.props.element.type} name={this.props.element.name} placeholder={this.props.element.placeholder} value={this.props.element.value}
                    onChange={this.props.handleChange}
                    className={this.props.element.isValid ? 'form-control' : 'invalid form-control'} />
            </div>
        );
    }

}


export default Input;
