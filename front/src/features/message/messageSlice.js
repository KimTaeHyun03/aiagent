// src/features/message/messageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    { id: 1, sender: "taehyun", content: "안녕!" },
    { id: 2, sender: "gpt", content: "안녕하세요!" },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { addMessage, setMessages } = messageSlice.actions;
export default messageSlice.reducer;
