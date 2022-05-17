import React from "react";
import Container from "./utils/Container";
import classnames from "classnames";
import { gameMode, playerMark } from "../reducers/gameSlice";
import { useSelector } from "react-redux";
import propTypes from "prop-types";

const ScoreBox = (props) => {
  const classStr = classnames(
    "rounded-15px w-140px h-72px mx-0 justify-center",
    props.bgColor
  );

  let playerInfo;
  const mode = useSelector(gameMode);
  const player1Mark = useSelector(playerMark);

  if (props.mark) {
    const player1x = props.mark === "x" && player1Mark === "x";
    const player1o = props.mark === "o" && player1Mark === "o";
    if (mode === "cpu") {
      if (player1x || player1o) {
        playerInfo = "you";
      } else {
        playerInfo = "cpu";
      }
    } else {
      if (player1x || player1o) {
        playerInfo = "p1";
      } else {
        playerInfo = "p2";
      }
    }
  }

  const text = props.mark ? `${props.mark} (${playerInfo})` : "ties";

  return (
    <Container classes={classStr}>
      <Container classes="w-fit h-48px flex-col justify-between ">
        <p className="text-s-custom uppercase">{text}</p>
        <p className="text-md-custom text-dark font-bold">{props.score}</p>
      </Container>
    </Container>
  );
};

ScoreBox.propTypes = {
  score: propTypes.number.isRequired,
  mark: propTypes.string,
  bgColor: propTypes.string,
};

ScoreBox.defaultProps = {
  bgColor: "",
  mark: "",
};

export default ScoreBox;
