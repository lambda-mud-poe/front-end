import React from "react";
import { LogScreenStyles } from "../styles/DashBoardStyles";

const LogScreen = ({logs}) => {
  return <LogScreenStyles>{logs.title}</LogScreenStyles>;
};

export default LogScreen;
