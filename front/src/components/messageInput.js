// src/components/messageInput.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/message/messageSlice';
import axios from 'axios';
import { useEffect } from 'react';

import './../css/messageInput.css';



const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.messages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      sender: 'taehyun',
      content: text,
    };
    dispatch(addMessage(newMessage));

    try{
      await axios.post('/api/message', newMessage);
      console.log('메시지 전송 성공:', newMessage);
    } catch (error) {
      console.error('메시지 전송 실패:', error);
    }

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
