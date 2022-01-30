import { createSlice } from '@reduxjs/toolkit';

let slice;
let changeTextMessage;

export interface ITextMessage {
  text: string;
}

/**
 * MOCK REDUCER // WHEN SHELL DON'T RUNNING //
 */
try {
  slice = require('shell/store/textMessageSlice');
  changeTextMessage = slice.changeTextMessage;
  slice = slice.slice;
} catch {
  slice = createSlice({
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

  changeTextMessage = slice.actions;
}

const getText = (state: { textMessage: ITextMessage }): ITextMessage =>
  state.textMessage;

export { slice, changeTextMessage, getText };
export default slice.reducer;
