import React from "react";
import Container from "./utils/Container";
import classnames from "classnames";
import { gameMode } from "../reducers/gameSlice";
import { useSelector } from "react-redux";

const ScoreBox = (props) => {
  const classStr = classnames(
    "rounded-15px w-140px h-72px mx-0 justify-center",
    props.bgColor
  );

  const mode = useSelector(gameMode);
  const playerInfo = mode === "cpu" ? "you" : "p1";

  const text = props.player ? `${props.player} (${playerInfo})` : "ties";

  return (
    <Container classes={classStr}>
      <Container classes="w-fit h-48px flex-col justify-between ">
        <p className="text-s-custom uppercase">{text}</p>
        <p className="text-md-custom text-dark font-bold">{props.score}</p>
      </Container>
    </Container>
  );
};
export default ScoreBox;
