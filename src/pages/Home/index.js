import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';

const host = 'https://jsonplaceholder.typicode.com/posts';

export const Home = () => {
  const [posts, setPosts] = useState();
  const fetchPosts = async () => {
    const result = await axios.get(host);
    setPosts(result.data);

    console.log('postsdsdd: ', posts);
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Box>
      {posts}
    </Box>
  );
};

export default Home;
