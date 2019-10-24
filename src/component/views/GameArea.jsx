import React, { useState, useEffect } from "react";
import DashBoard from "../~reuseables/molecules/DashBooard";
import config from "../../axios";

const GameArea = () => {
  const [gameData, setGameData] = useState([]);
  const [rooms, setRooms] = useState([]);

  /**
   * Initializes game and users,
   *@param: none
   */
  const LoadGame = () => {
    config
      .axiosWithAuth()
      .get(`/api/init`)
      .then(res => {
        setGameData(res.data);
      })
      .catch(err => {
        return err.statusText;
      });
  };

  async function LoadRooms () {
    await config
      .axiosWithAuth()
      .get(`/api/rooms/`)
      .then(res => {
        setRooms(res.data);
      })
      .catch(err => {
        return err.statusText;
      });
  };

  useEffect(() => {
    LoadGame();
    LoadRooms();
  }, []);
  return <DashBoard data={gameData}
  rooms={rooms} />;
};

export default GameArea;
