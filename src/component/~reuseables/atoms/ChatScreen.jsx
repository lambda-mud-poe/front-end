import React from 'react';
import {ChatScreenStyle} from '../styles/DashBoardStyles';

const ChatScreen = ({chats})=>{
    return(
        <ChatScreenStyle>
        {chats}
        </ChatScreenStyle>
    )
}

export default ChatScreen;