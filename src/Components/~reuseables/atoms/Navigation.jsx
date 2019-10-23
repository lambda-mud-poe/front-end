import React from "react";
import { Button, NavigationStyle } from "../styles/DashBoardStyles";

const Navigation = () => {
  return (
    <NavigationStyle>
      <Button className="btn">←</Button>
      <Button className="btn">→</Button>
      <Button className="btn">↓</Button>
      <Button className="btn">↑</Button>
    </NavigationStyle>
  );
};

export default Navigation;
