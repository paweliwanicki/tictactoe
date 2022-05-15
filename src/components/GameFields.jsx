import React from "react";
import GameField from "./GameField";
import propTypes from "prop-types";

const GameFields = (props) => {
  return props.board.map((field, ix) => (
    <GameField
      mark={field}
      key={`field_${ix}`}
      fieldIndex={ix}
      makeComputerMove={props.computerMoveHandler}
      setGameWinnerHandler={props.setGameWinnerHandler}
    />
  ));
};

GameFields.propTypes = {
  board: propTypes.array.isRequired,
  computerMoveHandler: propTypes.func.isRequired,
};

export default GameFields;
