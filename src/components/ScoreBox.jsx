import React from "react";
import Container from "./utils/Container";
import classnames from "classnames";
import { gameMode } from "../reducers/gameSlice";
import { useSelector } from "react-redux";
import { playerMark } from "../reducers/playerSlice";
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
    if (mode === "cpu") {
      playerInfo =
        props.mark === "x" && player1Mark === "x"
          ? "you"
          : props.mark === "o" && player1Mark === "o"
          ? "you"
          : "cpu";
    } else {
      playerInfo =
        props.mark === "x" && player1Mark === "x"
          ? "p1"
          : props.mark === "o" && player1Mark === "o"
          ? "p1"
          : "p2";
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
