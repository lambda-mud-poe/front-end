import React from 'react';
import {ActionStyle} from '../styles/DashBoardStyles';
import ChatScreen from '../atoms/ChatScreen';
import Navigation from '../atoms/Navigation';

const ActionArea =(props)=>{
    return (
        <ActionStyle>
            <ChatScreen/>
            <Navigation/>
        </ActionStyle>
    )
}

export default ActionArea;