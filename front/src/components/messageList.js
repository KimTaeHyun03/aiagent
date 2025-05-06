// src/components/messageList.js
import { useSelector } from 'react-redux';
import './../css/messageList.css';

const MessageList = () => {
  const messages = useSelector((state) => state.message.messages);

  return (
    <div className='messageListContainer'>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}> {/* id를 key로 사용 */}
            <strong>{msg.sender}:</strong> {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
