import Container from "./utils/Container";
import React, { useState } from "react";
import Icon from "./utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { activePlayer, switchPlayer } from "../reducers/playerSlice";

const GameField = (props) => {
  const acitvePlayerMark = useSelector(activePlayer);
  const dispatch = useDispatch();
  const [mark, setMark] = useState("");

  const setMarkHandler = () => {
    const playerMark = acitvePlayerMark;
    if (!mark) {
      setMark(playerMark);
      dispatch(switchPlayer());
    }
  };

  const markColor = mark ? (mark === "x" ? "#65E9E4" : "#FFC860") : "";
  const symbol = mark && (
    <Icon id={`icon-${mark}`} width={64} height={64} color={markColor} />
  );
  return (
    <Container
      classes="w-140px h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 "
      onClick={() => setMarkHandler()}
    >
      {symbol}
    </Container>
  );
};

export default GameField;
