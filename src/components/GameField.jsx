import Container from "./utils/Container";
import React from "react";
import Icon from "./utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { activePlayer, switchPlayer, setWinner } from "../reducers/playerSlice";
import {
  gameMode,
  blockBoard,
  gameBoard,
  setDisplayResult,
  setIsPlaying,
} from "../reducers/gameSlice";
import { setScore, setTie } from "../reducers/scoreSlice";
import { setBoard } from "../reducers/gameSlice";
import CssVariables from "./utils/cssVariables";
import propTypes from "prop-types";
import Controller from "../controllers/Controller";

const GameField = (props) => {
  const acitvePlayerMark = useSelector(activePlayer);
  const mode = useSelector(gameMode);
  const boardBlocked = useSelector(blockBoard);
  const dispatch = useDispatch();
  const board = useSelector(gameBoard);

  const setMarkHandler = () => {
    const playerMark = acitvePlayerMark;
    if (!props.mark && !boardBlocked) {
      dispatch(setBoard({ index: props.fieldIndex, mark: playerMark }));
      const newBoard = [...board];
      newBoard[props.fieldIndex] = playerMark;
      const win = Controller.checkIfWin(newBoard, playerMark);
      if (win === "tie") {
        dispatch(setTie());
        dispatch(setDisplayResult(true));
        dispatch(setIsPlaying(false));
      } else if (win) {
        dispatch(setDisplayResult(true));
        dispatch(setIsPlaying(false));
        dispatch(setWinner(playerMark));
        dispatch(setScore(playerMark));
      } else {
        dispatch(switchPlayer());
      }
      if (mode === "cpu") {
        props.makeComputerMove(newBoard);
      }
    }
  };

  let markColor = "";
  if (props.mark) {
    markColor =
      props.mark === "x" ? CssVariables.blueLight : CssVariables.orangeLight;
  }

  const symbol = props.mark && (
    <Icon id={`icon-${props.mark}`} width={64} height={64} color={markColor} />
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

GameField.propTypes = {
  makeComputerMove: propTypes.func.isRequired,
  fieldIndex: propTypes.number.isRequired,
  mark: propTypes.string,
};

export default GameField;
