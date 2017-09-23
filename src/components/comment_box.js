import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      comment: ''
    });
  }

  render () {
    return (
      <form className='comment-box'
        onSubmit={this.handleSubmit.bind(this)}
        >
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button action='submit'>Submit Comment</button>
      </form>
    );
  }
}
