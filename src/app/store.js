import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/commentsSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    posts: postsReducer,
  },
});

export default store;
