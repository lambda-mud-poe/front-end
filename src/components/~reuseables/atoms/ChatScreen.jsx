import React from 'react';
import { ChatScreenStyle } from '../styles/DashBoardStyles';

const ChatScreen = ({ chats }) => {
  return (
    <ChatScreenStyle>
      <h4>Chats</h4>
      {chats}
    </ChatScreenStyle>
  );
};

export default ChatScreen;
