import React from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm'

const comments = [
    {
        name: 'Looks great bub!',
        id: 1
    }, 
    {
        name: 'Whoop there it is!',
        id: 2
    }
];


class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
          comments// same as === groceries: groceries
        };
      }
    
      addComment = (e, comment) => {
        e.preventDefault();
        const newComment = {
          name: comment,
          id: Date.now()
        };
        this.setState({
          comments: [...this.state.comments, newComment]
        });
      };
    








    render() {
        console.log(this.state.comments)
      return (
        <div className="Comments">
          <CommentList comments={this.state.comments}/>
          <CommentForm addComment={this.addComment}/>
        </div>
      );
    }
  }
  
  export default CommentSection;