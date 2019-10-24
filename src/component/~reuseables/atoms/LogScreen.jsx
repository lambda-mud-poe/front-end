import React from 'react';
import { LogScreenStyles } from '../styles/DashBoardStyles';
import Players from './Players';

const LogScreen = ({ logs }) => {
  console.log(logs);
  return (
    <LogScreenStyles>
      <div className="room-log">{logs.title}</div>

      <div className="player-log">
        <Players players={logs.players} />
      </div>
    </LogScreenStyles>
  );
};

export default LogScreen;
