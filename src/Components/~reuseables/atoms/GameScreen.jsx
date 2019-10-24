import React from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
import { ScreenStyle } from "../styles/DashBoardStyles";

const GameScreen = ({ map }) => {
  const formatedCoordinates = {};
  map.forEach(item => {
    formatedCoordinates[item.id] = [
      {
        x: item.x,
        y: item.y
      },
      {}
    ];
    if ("n_to" in item) {
      formatedCoordinates[item.id][1]["n_to"] = item.n_to;
    }
    if ("s_to" in item) {
      formatedCoordinates[item.id][1]["s_to"] = item.s_to;
    }
    if ("e _to" in item) {
      formatedCoordinates[item.id][1]["e_to"] = item.e_to;
    }
    if ("w_to" in item) {
      formatedCoordinates[item.id][1]["w_to"] = item.w_to;
    }
  });


  // Create arrays to hold point coordinates and direction
  const roomCoordinate = [];
  const connectedRoom = [];

  if (Object.keys(formatedCoordinates).length !== 0){

  // Loop through each room in the map object
  for (let room in formatedCoordinates) {
    // Set data equal to the first element (x, y coordinates)
    // in each room of the room_data object
    let roomLocation = formatedCoordinates[room][0];
    roomCoordinate.push(roomLocation);
    for (let adjacentRooms in formatedCoordinates[room][1]) {
        let point = formatedCoordinates[formatedCoordinates[room][1][adjacentRooms]] !== undefined? formatedCoordinates[formatedCoordinates[room][1][adjacentRooms]][0] : 'No way';
      connectedRoom.push([
        formatedCoordinates[room][0],
        point
      ]);
    }
  }
  }


  console.log("-----linked---", connectedRoom);
  

  return (
    <ScreenStyle>
      <FlexibleXYPlot width={600} height={600}>
          {connectedRoom.map(link => (
            <LineSeries
              strokeWidth="2"
              color="#FF0"
              data={link}
              key={Math.random() * 100}
            />
          ))}
          <MarkSeries
            // current={this.props.currentRoom}
            highlight="#1b00ff"
            strokeWidth={3}
            opacity="1"
            size="3"
            color="#008000"
            data={roomCoordinate}
            style={{ cursor: "pointer" }}
          />
        </FlexibleXYPlot>
    </ScreenStyle>
  );
};

export default GameScreen;
