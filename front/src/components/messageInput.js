// src/components/messageInput.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/message/messageSlice';

import './../css/messageInput.css';



const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      sender: 'taehyun',
      content: text,
    };
    dispatch(addMessage(newMessage));
    setText('');
  };

  return (
    <div className='messageInputContainer'>
      <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button type="submit" className='messageInputBtn'>전송</button>
    </form>
      </div>
    
  );
};

export default MessageInput;
