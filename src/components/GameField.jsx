import Container from "./utils/Container";
import React from "react";
import Icon from "./utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { blockBoard, activePlayer, setBoard } from "../reducers/gameSlice";
import propTypes from "prop-types";
import { getMarkColor } from "../utils/mixin";

const GameField = (props) => {
  const dispatch = useDispatch();
  const activePlayerMark = useSelector(activePlayer);
  const boardBlocked = useSelector(blockBoard);
  const markColor = getMarkColor(props.mark);

  const setMarkHandler = () => {
    if (!props.mark && !boardBlocked) {
      dispatch(setBoard({ index: props.fieldIndex, mark: activePlayerMark }));
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
  fieldIndex: propTypes.number.isRequired,
  mark: propTypes.string,
};

GameField.defaultProps = {
  mark: "",
};

export default GameField;
