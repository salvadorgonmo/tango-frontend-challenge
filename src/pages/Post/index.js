import React from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
  const { id } = useParams();
  return (
    <div>
      {' '}
      hello post
      {id}
    </div>
  );
};

export default Post;
