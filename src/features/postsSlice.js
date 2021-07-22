import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPost: (state, action) => {
      state.value = action.payload;
      console.log('state: ', state);
      console.log('action: ', action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
