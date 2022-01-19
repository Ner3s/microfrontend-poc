import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  name: string;
  email: string;
}

const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

const { changeUser } = slice.actions;

const getUser = (state: { user: IUser }): IUser => state.user;

export { slice, changeUser, getUser };
export default slice.reducer;
