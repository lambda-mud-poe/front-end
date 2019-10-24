import React from 'react';
import { LogScreenStyles } from '../styles/DashBoardStyles';
import Players from './Players';

const LogScreen = ({ logs }) => {
  console.log(logs);
  return (
    <div>
      <LogScreenStyles>{logs.title}</LogScreenStyles>
      <Players />
    </div>
  );
};

export default LogScreen;
