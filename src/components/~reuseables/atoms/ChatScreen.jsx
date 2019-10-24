import React from 'react';
import {ChatScreenStyle} from '../styles/DashBoardStyles';
import ChatBox from '../molecules/ChatBox';

const ChatScreen = ({chats})=>{
    return(
        <ChatScreenStyle>
            <h4>Chats</h4>
        {chats}

        <ChatBox />
        </ChatScreenStyle>
    )
}

export default ChatScreen;