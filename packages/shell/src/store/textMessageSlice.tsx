import { createSlice } from '@reduxjs/toolkit';

export interface ITextMessage {
  text: string;
}

const slice = createSlice({
  name: 'textMessage',
  initialState: {
    text: '',
  },
  reducers: {
    changeTextMessage(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

const { changeTextMessage } = slice.actions;

const getText = (state: { textMessage: ITextMessage }): ITextMessage =>
  state.textMessage;

export { slice, changeTextMessage, getText };
export default slice.reducer;
