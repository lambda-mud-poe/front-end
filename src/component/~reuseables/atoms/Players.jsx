import React from 'react';
import styled from 'styled-components';

const StyledPlayers = styled.div`
    h4 {
        color: red;
        
    }
`;


export default function Players({ players }) {


  return (
    <StyledPlayers>
      <h4>Other Players</h4>
      {players.map((player, i) => {
        console.log(player);
        return (
          <div>
            <p key={i}>{player}</p>
          </div>
        );
      })}
    </StyledPlayers>
  );
}

Players.defaultProps = {
  players: []
};
