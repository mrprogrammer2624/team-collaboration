import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  activeChannel: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setActiveChannel: (state, action) => {
      state.activeChannel = action.payload;
    },
  },
});

export const { setMessages, addMessage, setActiveChannel } = chatSlice.actions;
export default chatSlice.reducer;