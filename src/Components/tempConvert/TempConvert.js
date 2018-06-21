import React, { Component } from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

class TempConvert extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<div className="TempConvert">
				<h5>Enter temperature in {scaleNames[scale]}:</h5>
				<input value={temperature}
					onChange={(e) => this.handleChange(e)} className="form-control" />
				<br />
			</div>
		);
	}
}

export default TempConvert;
