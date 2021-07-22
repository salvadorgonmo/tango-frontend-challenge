import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addComment } from '../../features/commentsSlice';
import { PostCard } from '../../components/PostCard';
import { Comment } from '../../components/Comment';

const host = 'https://jsonplaceholder.typicode.com/';

export const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const posts = useSelector((state) => state.posts.posts);
  const filteredPost = posts.find((post) => post.id === Number(id));

  const fetchComments = useCallback(async () => {
    const fetchedComments = await axios.get(`${host}comments?postId=${id}`);
    dispatch(addComment(fetchedComments.data));
  }, [id, dispatch]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      {filteredPost && (
        <PostCard
          key={filteredPost.id}
          body={filteredPost.body}
          title={filteredPost.title}
          id={filteredPost.id}
        />
      )}
      <Comment
        comments={comments}
      />
    </div>
  );
};

export default Post;
