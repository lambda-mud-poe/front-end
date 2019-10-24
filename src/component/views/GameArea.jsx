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

  async function LoadRooms() {
    await config
      .axiosWithAuth()
      .get(`/api/rooms/`)
      .then(res => {
        setRooms(res.data);
      })
      .catch(err => {
        return err.statusText;
      });
  }

  const actionDirection = (e) => {
    console.log('=======I moved=======', e);
    console.log('=======I moved=======', e.currentTarget);
    config
      .axiosWithAuth()
      .post(`/api/move`, { direction: e.currentTarget.name })
      .then(res => {
        console.log('=======I moved=======', res);
      })
      .catch(err => {
        return err.statusText;
      });
  };

  useEffect(() => {
    LoadGame();
    LoadRooms();
  }, []);
  // console.log('=======',rooms)
  return <DashBoard data={gameData} rooms={rooms} action={actionDirection} />;
};

export default GameArea;
