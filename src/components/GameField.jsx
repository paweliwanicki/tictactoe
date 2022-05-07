import Container from "./utils/Container";
import React, { useState } from "react";
import Icon from "./utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { activePlayer, switchPlayer } from "../reducers/playerSlice";
import { gameMode, blockBoard } from "../reducers/gameSlice";
import { setBoard } from "../reducers/gameSlice";
import CssVariables from "./utils/cssVariables";

const GameField = (props) => {
  const acitvePlayerMark = useSelector(activePlayer);
  const mode = useSelector(gameMode);
  const boardBlocked = useSelector(blockBoard);
  const dispatch = useDispatch();
  const [mark, setMark] = useState("");

  const setMarkHandler = () => {
    const playerMark = acitvePlayerMark;
    if (!mark && !boardBlocked) {
      setMark(playerMark);
      dispatch(setBoard({ index: props.fieldIndex, mark: playerMark }));
      dispatch(switchPlayer());

      if (mode === "cpu") {
        props.makeComputerMove();
      }
    }
  };

  let markColor = "";
  if (mark) {
    markColor =
      mark === "x" ? CssVariables.blueLight : CssVariables.orangeLight;
  }

  const symbol = mark && (
    <Icon id={`icon-${mark}`} width={64} height={64} color={markColor} />
  );
  return (
    <Container
      classes="w-140px h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 justify-center"
      onClick={() => setMarkHandler()}
    >
      {symbol}
    </Container>
  );
};

export default GameField;
