import React from 'react';
import './Comment.css';

export const Comment = ({
  comments,
}) => {
  if (!comments) {
    return null;
  }

  return (
    comments.map((comment) => (
      <div className="comment-container" key={comment.id}>
        <div className="personal-data">
          <p>
            Email:
            <br />
            {comment.email}
          </p>
          <p>
            Name:
            <br />
            {comment.name}
          </p>
        </div>
        <p>{comment.body}</p>

      </div>
    ))
  );
};

export default Comment;
