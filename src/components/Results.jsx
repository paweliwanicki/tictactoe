import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import { CPU, getMarkColor } from "../utils/mixin";
import {
  gameLanguage,
  gameMode,
  playerMark,
  startNewGame,
  winnerMark,
} from "../reducers/gameSlice";
import langs from "../langs/langs";
import { Mark, MarkComponents } from "../types/Mark";

const Results = () => {
  const dispatch = useDispatch();
  const winner = useSelector(winnerMark);
  const player1Mark = useSelector(playerMark);
  const mode = useSelector(gameMode);
  const markColor = winner && getMarkColor(winner, MarkComponents.Results);
  const lang = useSelector(gameLanguage);

  let textColorClass = "text-silver";
  if (winner) {
    textColorClass = winner === Mark.x ? "text-blue" : "text-orange";
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
        player1Mark === winner ? langs[lang].youWon : langs[lang].youLost;
    } else {
      playerInfoText = `${langs[lang].player} ${
        player1Mark === winner ? "1" : "2"
      } ${langs[lang].wins}!`;
    }
  }

  return (
    <Container classes="w-full h-full fixed inset-0 ">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center my-auto flex-col ">
        {winner && (
          <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex">
            {playerInfoText}
          </TextBox>
        )}
        <Container
          classes={`flex items-center xsm:px-15px text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center  text-center px-13px`}
        >
          {winner && (
            <Icon
              id={`icon-${winner}`}
              viewBox="0 0 64 64"
              color={markColor}
              classes="mx-13px xsm:mr-24px w-52px h-52px sm:w-64px sm:h-64px"
            />
          )}
          <TextBox
            classes={`text-ml-custom mb-24px font-bold xsm:text-xl-custom ${textColorClass} mb-0`}
          >
            {!winner ? langs[lang].roundTied : langs[lang].takesRound}
          </TextBox>
        </Container>

        <Container classes="flex justify-center  ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text={langs[lang].quit}
            onClick={quitGameHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text={langs[lang].nextRound}
            onClick={nextRoundHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Results;
