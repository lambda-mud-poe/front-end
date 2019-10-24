import React from "react";
import { LogScreenStyles } from "../styles/DashBoardStyles";
let roomDetails = [];
const LogScreen = ({ logs }) => {
  if (logs.title && logs.description) {
    roomDetails = roomDetails.concat({
      title: logs.title,
      description: logs.description,
      id: logs.room_id
    });
  }
  return (
    <LogScreenStyles>
      <h1>Room</h1>
      <hr />
      {roomDetails.map(room => (
        <div key={room.id} className="single-room">
          <p>Room title: {room.title}</p>
          <p>Room description: {room.description}</p>
          <hr />
        </div>
      ))}
    </LogScreenStyles>
  );
};

export default LogScreen;
