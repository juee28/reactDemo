import React, { Component } from 'react';
import API from '../../Api';

class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedPost: null
        }
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                API.get('posts/' + this.props.id)
                    .then(res => {
                        this.setState({
                            loadedPost: res.data
                        })
                    }).catch((error) => console.error(error));
            }

        }
    }

    deleteHandler(id) {
        API.delete('posts/' + this.props.id)
            .then(res => {
                alert("SuccessFully Delete!");
            }).catch((error) => console.error(error));
    }

    render() {
        return (
            <div className="DetailPost">
                {
                    this.props.id && this.state.loadedPost ?
                        (<div>
                            <h6>{this.state.loadedPost.title}</h6>
                            <p>{this.state.loadedPost.body}</p>
                            <button className="red btn" onClick={() => this.deleteHandler(this.state.loadedPost.id)}>Delete</button>
                        </div>) : 'Please Select Post!'
                }
            </div>
        );
    }
}

export default DetailPost;
