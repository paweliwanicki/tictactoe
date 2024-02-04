import { useCallback, useState } from "react";
import { Mark } from "../types/Mark";
import { useGame } from "contexts/GameContext";
import GameFields from "./GameFields";
import ScoreBox from "./ScoreBox";
import Results from "./Results";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import TextBox from "./utils/TextBox";
import SubMenu from "./utils/SubMenu";
import CssVariables from "../utils/cssVariables";
import langs from "../langs/langs";

const GameBoard = () => {
  const { gameBoard, activePlayer, showResults, language, score, quitGame } =
    useGame();
  const { x, o, ties } = score;
  const [showRestartMenu, setShowRestartMenu] = useState<boolean>(false);

  const backToMenuHandler = useCallback(() => {
    quitGame();
  }, [quitGame]);

  const showRestartMenuHandler = useCallback(() => {
    setShowRestartMenu((isShowing) => !isShowing);
  }, []);

  return (
    <>
      <Container classes="flex items-center max-w-full flex-wrap h-623px sm:w-460px max-w-460px w-92%">
        <Container classes="flex items-center w-full gap-5px sm:gap-20px mb-19px relative">
          <Container classes="absolute">
            <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
          </Container>
          <Container classes="flex items-center bg-semi-dark text-silver mx-auto w-110px sm:w-140px text-center text-sm-custom pt-13px pb-19px rounded-10px shadow-sm-dark-custom justify-center">
            <Icon
              id={`icon-${activePlayer}`}
              viewBox="0 0 20 20"
              width={20}
              height={20}
              color={CssVariables.silver}
              classes="mr-13px"
            />
            <TextBox classes="font-bold">{langs[language].turn}</TextBox>
          </Container>
          <Button
            classes="h-52px w-52px bg-silver hover:bg-silver-light shadow-sm-silver-custom rounded-10px absolute right-0"
            text={
              <Icon
                id="icon-restart"
                viewBox="0 0 20 20"
                width={20}
                height={20}
                classes="mx-auto"
              />
            }
            icon
            primary={false}
            type="button"
            onClick={showRestartMenuHandler}
          />
        </Container>
        <Container classes="grid grid-cols-3 grid-rows-3 gap-10px xsm:gap-20px mx-auto mb-19px">
          <GameFields board={gameBoard} />
        </Container>

        <Container classes="flex items-center justify-between mx-0 w-full gap-10px">
          <ScoreBox bgColor="bg-blue" mark={Mark.x} score={x} />
          <ScoreBox bgColor="bg-silver" score={ties} />
          <ScoreBox bgColor="bg-orange" mark={Mark.o} score={o} />
        </Container>
      </Container>
      {showRestartMenu && (
        <SubMenu
          header={langs[language].restartGame}
          cancelBtnText={langs[language].noCancel}
          confirmBtnText={langs[language].yesRestart}
          onConfirm={backToMenuHandler}
          onCancel={showRestartMenuHandler}
        />
      )}
      {showResults && <Results />}
    </>
  );
};

export default GameBoard;
