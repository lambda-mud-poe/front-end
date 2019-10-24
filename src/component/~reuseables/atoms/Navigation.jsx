import React from "react";
import { Button, NavigationStyle } from "../styles/DashBoardStyles";

const Navigation = ({direction}) => {
  return (
    <NavigationStyle>
      <Button onClick={(e) => console.log(e)} name='w' defaultValue="wjmnhg y" className="btn">←</Button>
      <Button onClick={direction} name='e' className="btn">→</Button>
      <Button onClick={direction} name='s' className="btn">↓</Button>
      <Button onClick={direction} name='n' className="btn">↑</Button>
    </NavigationStyle>
  );
};

export default Navigation;
