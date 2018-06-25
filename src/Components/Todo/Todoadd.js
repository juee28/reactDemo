

import React, {Component} from 'react';

class Todoadd extends Component {
    render() {
        return (
            <div className="form-group">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Task..." ref='inputRef' />
                <button className="input-group-addon btn btn-default" onClick={(e) => this.props.handleAdd(this.refs.inputRef, e)}>Add</button>
            </div>
        </div>
        )
    }
    
}

export default Todoadd;