import React from 'react';
import { LogScreenStyles } from '../styles/DashBoardStyles';

const LogScreen = ({ logs }) => {
  console.log(logs);
  return (
    <LogScreenStyles>
      <div className="room-log">{logs.title}</div>
    </LogScreenStyles>
  );
};

export default LogScreen;
