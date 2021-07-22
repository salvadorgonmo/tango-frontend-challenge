import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';
import { PostCard } from './components/PostCard';

const host = 'https://jsonplaceholder.typicode.com/posts';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const result = await axios.get(host);
    setPosts(result.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          body={post.body}
          title={post.title}
          id={post.id}
        />
      ))}
    </Box>
  );
};

export default Home;
