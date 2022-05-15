import React from "react";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  gameMode,
  playerMark,
  startNewGame,
  winnerMark,
} from "../reducers/gameSlice";
import { getMarkColor } from "../utils/mixin";
import propTypes from "prop-types";

const Results = (props) => {
  const dispatch = useDispatch();
  const winner = useSelector(winnerMark);
  const player1Mark = useSelector(playerMark);
  const mode = useSelector(gameMode);
  const markColor = winner === "x" ? getMarkColor("x") : getMarkColor("o");

  let textColor = "text-silver";
  if (winner) {
    textColor = winner === "x" ? "text-blue" : "text-orange";
  }

  const quitGameHandler = () => {
    dispatch(startNewGame({ isPlaying: false, resetScores: true }));
    props.onCancel();
  };

  const nextRoundHandler = () => {
    dispatch(startNewGame({ isPlaying: true, resetScores: false }));
    props.onConfirm();
  };

  let playerInfoText = "";
  if (winner) {
    if (mode === "cpu") {
      playerInfoText = player1Mark === winner ? "YOU WON!" : "OH NO, YOU LOST…";
    } else {
      playerInfoText = `PLAYER ${player1Mark === winner ? "1" : "2"} WINS!`;
    }
  }

  return (
    <Container classes="w-full h-full fixed inset-0 align-center">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="w-screen h-266px bg-semi-dark fixed inset-0 justify-center align-center my-auto flex-col">
        {winner && (
          <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex ">
            {playerInfoText}
          </TextBox>
        )}
        <Container
          classes={`text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center align-center`}
        >
          {winner && (
            <Icon
              id={`icon-${winner}`}
              viewBox="0 0 64 64"
              width={64}
              height={64}
              color={markColor}
              classes="mr-24px"
            />
          )}
          <TextBox
            classes={`text-sm-custom mb-24px font-bold text-xl-custom ${textColor} mb-0`}
          >
            {!winner ? "ROUND TIED" : "TAKES THE ROUND"}
          </TextBox>
        </Container>

        <Container classes="flex justify-center align-center ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text="QUIT"
            onClick={quitGameHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text="NEXT ROUND"
            onClick={nextRoundHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

Results.propTypes = {
  onCancel: propTypes.func.isRequired,
  onConfirm: propTypes.func.isRequired,
};

export default Results;
