import Container from "./utils/Container";
import React, { useState } from "react";
import Icon from "./utils/Icon";

const GameField = (props) => {
  const [mark, setMark] = useState(null);

  const setMarkHandler = (e) => {
    const playerMark = "x"; // redux state
    setMark(playerMark);
  };
  const markColor = mark ? (mark === "x" ? "#65E9E4" : "#FFC860") : "";
  const symbol = mark && (
    <Icon id={`icon-${mark}`} width={64} height={64} color={markColor} />
  );
  return (
    <Container
      classes="w-140px h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 "
      onClick={(e) => setMarkHandler(e)}
    >
      {symbol}
    </Container>
  );
};

export default GameField;
