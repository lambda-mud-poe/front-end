import React from 'react';
import {ActionStyle} from '../styles/DashBoardStyles';
import ChatScreen from '../atoms/ChatScreen';
import Navigation from '../atoms/Navigation';
import Player from '../atoms/Players';

const ActionArea =(props)=>{
    return (
        <ActionStyle>
            <ChatScreen/>
            <Navigation/>
            <Player players={props.logs.players} />
        </ActionStyle>
    )
}

export default ActionArea;