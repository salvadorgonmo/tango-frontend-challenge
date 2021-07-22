import React, { useEffect, useState, useCallback } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { PostCard } from '../../components/PostCard';
import { addPost } from '../../features/postsSlice';

const host = 'https://jsonplaceholder.typicode.com/posts';

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [localPosts, setLocalPosts] = useState(posts);

  const fetchPosts = useCallback(async () => {
    const result = await axios.get(host);
    setLocalPosts(result.data);
    dispatch(addPost(result.data));
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Box>
      {localPosts.map((post) => (
        <PostCard
          key={post.id}
          body={post.body}
          title={post.title}
          id={post.id}
          clickable
        />
      ))}
    </Box>
  );
};

export default Home;
