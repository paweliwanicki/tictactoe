import React from "react";
import GameField from "./GameField";
import propTypes from "prop-types";

const GameFields = (props) => {
  return props.board.map((field, ix) => (
    <GameField mark={field} key={`field_${ix}`} fieldIndex={ix} />
  ));
};

GameFields.propTypes = {
  board: propTypes.array.isRequired,
};

export default GameFields;
