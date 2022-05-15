import Container from "./utils/Container";
import React from "react";
import Icon from "./utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { activePlayer } from "../reducers/playerSlice";
import { gameMode, blockBoard, gameBoard } from "../reducers/gameSlice";
import { setBoard } from "../reducers/gameSlice";
import propTypes from "prop-types";
import Controller from "../controllers/Controller";
import { getMarkColor } from "../utils/mixin";

const GameField = (props) => {
  const dispatch = useDispatch();
  const acitvePlayerMark = useSelector(activePlayer);
  const mode = useSelector(gameMode);
  const boardBlocked = useSelector(blockBoard);
  const board = useSelector(gameBoard);

  const markColor = getMarkColor(props.mark);

  const setMarkHandler = () => {
    const playerMark = acitvePlayerMark;
    if (!props.mark && !boardBlocked) {
      dispatch(setBoard({ index: props.fieldIndex, mark: playerMark }));
      const newBoard = [...board];
      newBoard[props.fieldIndex] = playerMark;
      const win = Controller.checkIfWin(newBoard, playerMark);
      props.setGameWinnerHandler(win, playerMark);
      if (mode === "cpu" && !win) {
        props.makeComputerMove(newBoard);
      }
    }
  };

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

GameField.defaultProps = {
  mark: '',
};

export default GameField;
