import React from 'react';
import { LogScreenStyles } from '../styles/DashBoardStyles';

const LogScreen = ({ logs }) => {
  console.log(logs);
  return <LogScreenStyles>{logs.title}</LogScreenStyles>;
};

export default LogScreen;
