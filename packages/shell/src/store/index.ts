import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

// Redux state return all states in reducer
export type RootState = ReturnType<typeof store.getState>;

// Inferred type dispatch
export type AppDispatch = typeof store.dispatch;
