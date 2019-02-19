import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    this.setState({ comment: '' });
    this.props.addComment(e, this.state.comment);
  };

  render() {
    return (
      <form onSubmit={this.submitComment}>
        <input
          type="text"
          value={this.state.comment}
          name="comment"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default CommentForm;