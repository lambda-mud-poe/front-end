import React from "react";
import {
  FlexibleXYPlot,
  LineSeries,
  MarkSeries,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  PolygonSeries
} from "react-vis";
import { ScreenStyle } from "../styles/DashBoardStyles";

const GameScreen = ({ map, location }) => {
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

  // set current location ( x: 11, y: 2, room_id: 52,)
  const currentLocation = {};
  if (Object.keys(location).length !== 0) {
    [location].forEach(item => {
      currentLocation[0] = [
        {
          x: item.x,
          y: item.y
        }
      ];
    });
  }
  let newpoint =
    currentLocation[0] !== undefined ? currentLocation[0][0] : "go away";

  const roomCoordinate = [];
  const connectedRoom = [];

  if (Object.keys(formatedCoordinates).length !== 0) {
    for (let room in formatedCoordinates) {
      let roomLocation = formatedCoordinates[room][0];
      roomCoordinate.push(roomLocation);
      for (let adjacentRooms in formatedCoordinates[room][1]) {
        let point =
          formatedCoordinates[formatedCoordinates[room][1][adjacentRooms]] !==
          undefined
            ? formatedCoordinates[
                formatedCoordinates[room][1][adjacentRooms]
              ][0]
            : "No way";
        connectedRoom.push([formatedCoordinates[room][0], point]);
      }
    }
  }
  console.log(roomCoordinate);

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
        {roomCoordinate.map(room =>
          newpoint.x === room.x && newpoint.y === room.y ? (
            <MarkSeries
              highlight="#1b00ff"
              strokeWidth={5}
              opacity="1"
              color="pink"
              data={[newpoint]}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <MarkSeries
              highlight="#1b00ff"
              strokeWidth={5}
              opacity="1"
              color="#008000"
              data={[{ x: 0, y: 0 }]}
              style={{ cursor: "pointer" }}
            />
          )
        )}
        {/* <PolygonSeries
    className="polygon-series-example"
    data={roomCoordinate}/> */}
      </FlexibleXYPlot>
    </ScreenStyle>
  );
};

export default GameScreen;
