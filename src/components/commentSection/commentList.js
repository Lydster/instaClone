import React from 'react';
import Comment from './comment';

const CommentList = props => {
  return (
    <div className="comment-list">
      {props.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
