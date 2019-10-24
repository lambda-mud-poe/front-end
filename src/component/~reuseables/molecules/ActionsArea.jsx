import React from 'react';
import {ActionStyle} from '../styles/DashBoardStyles';
import ChatScreen from '../atoms/ChatScreen';
import Navigation from '../atoms/Navigation';
import Player from '../atoms/Players';

const ActionArea =({move, logs})=>{
    return (
        <ActionStyle>
            <ChatScreen/>
            <Navigation direction={move}/>
            <Player players={logs.players} />
        </ActionStyle>
    )
}

export default ActionArea;