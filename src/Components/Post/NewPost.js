import React, { Component } from 'react';

import API from '../../Api';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }


    handleChange(event) {
        const element = event.target;
        const name = element.name;
        const value = (element.value).trim();

        this.setState({
            [name]: value
        })
    }

    addPostHandler(event) {
        event.preventDefault();
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }

        API.post('posts', newPost)
            .then(res => {
                alert('Success!!!!');
                this.setState({
                    title: '',
                    body: ''
                })
            }).catch((error) => console.error(error));
    }


    render() {
        return (
            <div className="NewPost">
                <h6>Add New Post</h6>
                <form className="form">
                    <div className="label">
                        <label>Title: </label>
                        <input type="text" name="title" placeholder="Enter title" value={this.state.title}
                            onChange={(e) => this.handleChange(e)}
                            className="form-control" />
                    </div><br/>
                    <div className="label">
                        <label>Content: </label>
                        <textarea name="body" value={this.state.body} placeholder="Enter Content" className="form-control" onChange={(e) => this.handleChange(e)}></textarea>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={(e) => this.addPostHandler(e)}>Add</button>
                </form>
            </div>
        );
    }
}

export default NewPost;
