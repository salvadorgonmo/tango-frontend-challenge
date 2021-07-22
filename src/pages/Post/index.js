import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addComment } from '../../features/commentsSlice';
import { PostCard } from '../Home/components/PostCard';

const host = 'https://jsonplaceholder.typicode.com/';

export const Post = () => {
  const { id } = useParams();
  const [localComment, setLocalComment] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const posts = useSelector((state) => state.posts.posts);
  const filteredPost = posts.find((post) => post.id === id);

  const fetchComments = useCallback(async () => {
    const fetchedComments = await axios.get(`${host}comments?postId=${id}`);
    dispatch(addComment(fetchedComments.data));
  }, [id, dispatch]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleChange = (evt) => {
    const { value } = evt.currentTarget;
    setLocalComment(value);
  };

  const handleClick = () => {
    dispatch(addComment([localComment]));
  };

  return (
    <div>
      {filteredPost && (
        <PostCard
          key={filteredPost.id}
          body={filteredPost.body}
          title={filteredPost.title}
          id={filteredPost.id}
          clickable
        />
      )}
      {comments && comments.map((comment) => (
        <p key={comment.id}>{comment.email}</p>
      ))}
      <input onChange={handleChange} />
      <button onClick={handleClick}>
        add comment
      </button>
    </div>
  );
};

export default Post;
