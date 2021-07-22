import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      console.log('state: ', state);
      console.log('action: ', action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

export default commentsSlice.reducer;
