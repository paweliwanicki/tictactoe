import React from "react";
import propTypes from "prop-types";
import GameField from "./GameField";

const GameFields = (props) => {
  return props.board.map((field, ix) => (
    <GameField mark={field} key={`field_${ix}`} fieldIndex={ix} />
  ));
};

GameFields.propTypes = {
  board: propTypes.array.isRequired,
};

export default GameFields;
