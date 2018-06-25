import React, { Component } from 'react';
import API from '../../Api';

import PostList from './PostList';
import DetailPost from './DetailPost';
import NewPost from './NewPost';

import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    API.get('posts')
      .then(res => {
        const Posts = res.data.slice(0, 4);
        this.setState({
          Posts: Posts
        })
      }).catch((error) => console.error(error));
  }

  selectPostHandle(id) {
    debugger
    this.setState({
      selectedPost: id
    })
  }

  render() {
    let postList = 'Loading....';
    if (this.state.Posts.length > 0) {
      postList = this.state.Posts.map((post) => { return <PostList post={post} key={post.id} onClickPost={() => this.selectPostHandle(post.id)} /> })
    }

    return (
      <div className="Post">
        <div className="row margin0">
          {postList}
        </div>
        <div>
          <DetailPost id={this.state.selectedPost} />
        </div>
        <div>
          <NewPost />
        </div>
      </div>
    );
  }
}

export default Post;
