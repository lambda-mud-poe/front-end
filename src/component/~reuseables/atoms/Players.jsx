import React from 'react';

export default function Players({ players }) {


  return (
    <div>
      <h4>Players in the same room</h4>
      {players.map((player, i) => {
        console.log(player);
        return (
          <div>
            <p key={i}>{player}</p>
          </div>
        );
      })}
    </div>
  );
}

Players.defaultProps = {
  players: []
};
