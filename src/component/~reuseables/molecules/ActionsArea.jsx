import React from 'react';
import {ActionStyle} from '../styles/DashBoardStyles';
import ChatScreen from '../atoms/ChatScreen';
import Navigation from '../atoms/Navigation';

const ActionArea =({move})=>{
    return (
        <ActionStyle>
            <ChatScreen/>
            <Navigation direction={move}/>
        </ActionStyle>
    )
}

export default ActionArea;