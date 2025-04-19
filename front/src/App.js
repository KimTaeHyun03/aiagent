import MessageList from './components/messageList';
import MessageInput from './components/messageInput';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1>AI 메시지 챗</h1>
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
