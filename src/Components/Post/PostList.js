import React, { Component } from 'react';

class PostList extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="PostList col-md-3">
                <div className="post-container"  onClick={this.props.onClickPost}>
                    <h6>{post.title}</h6>
                </div>
            </div>
        );
    }
}

export default PostList;
