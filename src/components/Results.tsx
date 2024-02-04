import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import langs from "../langs/langs";
import { getMarkColor } from "../utils/mixin";
import { Mark, MarkComponents } from "../types/Mark";
import { useCallback } from "react";
import { useGame } from "contexts/GameContext";
import { GameMode } from "types/GameMode";

const Results = () => {
  const { gameMode, winnerMark, playerMark, language, startNewGame, quitGame } =
    useGame();
  const markColor =
    winnerMark && getMarkColor(winnerMark, MarkComponents.Results);

  let textColorClass = "text-silver";
  let playerInfoText = "";
  if (winnerMark) {
    textColorClass = winnerMark === Mark.x ? "text-blue" : "text-orange";

    if (gameMode === GameMode.CPU) {
      playerInfoText =
        playerMark === winnerMark
          ? langs[language].youWon
          : langs[language].youLost;
    } else {
      playerInfoText = `${langs[language].player} ${
        playerMark === winnerMark ? "1" : "2"
      } ${langs[language].wins}!`;
    }
  }

  const quitGameHandler = useCallback(() => {
    quitGame();
  }, [quitGame]);

  const nextRoundHandler = useCallback(() => {
    startNewGame(gameMode);
  }, [gameMode, startNewGame]);

  return (
    <Container classes="w-full h-full fixed inset-0 ">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center my-auto flex-col ">
        {winnerMark && (
          <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex">
            {playerInfoText}
          </TextBox>
        )}
        <Container
          classes={`flex items-center xsm:px-15px text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center  text-center px-13px`}
        >
          {winnerMark && (
            <Icon
              id={`icon-${winnerMark}`}
              viewBox="0 0 64 64"
              color={markColor}
              classes="mx-13px xsm:mr-24px w-52px h-52px sm:w-64px sm:h-64px"
            />
          )}
          <TextBox
            classes={`text-ml-custom mb-24px font-bold xsm:text-xl-custom ${textColorClass} mb-0`}
          >
            {!winnerMark
              ? langs[language].roundTied
              : langs[language].takesRound}
          </TextBox>
        </Container>

        <Container classes="flex justify-center  ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text={langs[language].quit}
            onClick={quitGameHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text={langs[language].nextRound}
            onClick={nextRoundHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Results;
