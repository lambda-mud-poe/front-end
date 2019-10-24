import React from 'react';
import { ChatScreenStyle } from '../styles/DashBoardStyles';
import ChatBox from '../molecules/ChatBox';

const ChatScreen = ({ chats }) => {
  return (
    <ChatScreenStyle>
      <ChatBox />

      <div className="chatbox">
        <h4>Chats</h4>
        {chats}
      </div>
    </ChatScreenStyle>
  );
};

export default ChatScreen;
