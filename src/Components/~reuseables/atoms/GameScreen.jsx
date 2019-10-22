import React from 'react';
import styled from 'styled-components';
import { Screen } from '../styles/DashBoardStyles';


const GameScreen =({map})=>{
    return (
        <Screen>
        {map}
        </Screen>
    )
}

export default GameScreen;