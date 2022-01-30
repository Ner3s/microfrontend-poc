import { configureStore } from '@reduxjs/toolkit';
import textMessageReducer, {changeTextMessage} from './textMessageSlice';

const store = configureStore({
  reducer: {
    textMessage: textMessageReducer,
  },
});

export default store;

// Redux state return all states in reducer
export type RootState = ReturnType<typeof store.getState>;

// Inferred type dispatch
export type AppDispatch = typeof store.dispatch;
