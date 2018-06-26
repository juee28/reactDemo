import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actionType';
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            < div >
                Count : {this.props.counter}<br/><br/>
                <button className="btn btn-primary margin-10" onClick={this.props.incrementCounter}>Increment Counter</button>
                <button className="btn btn-primary" onClick={this.props.addCounter}>Add</button>
            </div >

        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.count.count
    };
}

const mapActionToProps = dispatch => {
    return {
        incrementCounter : () =>  dispatch({type: actionType.INC_COUNTER}),
        addCounter: () => dispatch({type: actionType.ADD, value: 10})
    }
}
export default connect(mapStateToProps, mapActionToProps)(Counter);