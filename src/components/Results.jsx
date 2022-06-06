import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import { CPU, getMarkColor } from "../utils/mixin";
import {
  gameMode,
  playerMark,
  startNewGame,
  winnerMark,
} from "../reducers/gameSlice";
import langs from "../langs/langs";

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
  };

  const nextRoundHandler = () => {
    dispatch(startNewGame({ isPlaying: true, resetScores: false, mode: mode }));
  };

  let playerInfoText = "";
  if (winner) {
    if (mode === CPU) {
      playerInfoText =
        player1Mark === winner ? langs.en.youWon : langs.en.youLost;
    } else {
      playerInfoText = `${langs.en.player} ${
        player1Mark === winner ? "1" : "2"
      } ${langs.en.wins}!`;
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
            {!winner ? langs.en.roundTied : langs.en.takesRound}
          </TextBox>
        </Container>

        <Container classes="flex justify-center align-center ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text={langs.en.quit}
            onClick={quitGameHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text={langs.en.nextRound}
            onClick={nextRoundHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Results;
