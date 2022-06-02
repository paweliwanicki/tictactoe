import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import GameFields from "./GameFields";
import ScoreBox from "./ScoreBox";
import Results from "./Results";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import TextBox from "./utils/TextBox";
import SubMenu from "./utils/SubMenu";
import CssVariables from "../utils/cssVariables";
import {
  gameBoard,
  showResults,
  xScore,
  oScore,
  totalTies,
  startNewGame,
  activePlayer,
} from "../reducers/gameSlice";
import langs from "../langs/langs";

const GameBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector(gameBoard, shallowEqual);
  const activePlayerMark = useSelector(activePlayer);
  const tiesScore = useSelector(totalTies);
  const xTotalScore = useSelector(xScore);
  const oTotalScore = useSelector(oScore);

  const [showRestartMenu, setShowRestartMenu] = useState(false);
  const showGameResults = useSelector(showResults);

  const backToMenuHandler = () => {
    dispatch(startNewGame({ isPlaying: false, resetScores: true }));
  };

  return (
    <>
      <Container classes="max-w-full flex-wrap h-623px w-460px max-w-460px">
        <Container classes="w-full gap-20px mb-19px">
          <Container classes="w-140px justify-start">
            <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
          </Container>
          <Container classes="bg-semi-dark text-silver w-140px text-center text-sm-custom pt-13px pb-19px rounded-10px shadow-sm-dark-custom justify-center align-center">
            <Icon
              id={`icon-${activePlayerMark}`}
              viewBox="0 0 20 20"
              width={20}
              height={20}
              color={CssVariables.silver}
              classes="mr-13px"
            />
            <TextBox classes="font-bold">{langs.en.turn}</TextBox>
          </Container>
          <Button
            classes="h-52px w-52px bg-silver hover:bg-silver-light shadow-sm-silver-custom ml-auto rounded-10px"
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
            onClick={() => setShowRestartMenu(true)}
          />
        </Container>
        <Container classes="w-full justify-between mb-19px flex-wrap gap-20px">
          <GameFields board={board} activePlayerMark={activePlayerMark} />
        </Container>

        <Container classes="justify-between mx-0 w-full">
          <ScoreBox bgColor="bg-blue" mark={"x"} score={xTotalScore} />
          <ScoreBox bgColor="bg-silver" score={tiesScore} />
          <ScoreBox bgColor="bg-orange" mark={"o"} score={oTotalScore} />
        </Container>
      </Container>
      {showRestartMenu && (
        <SubMenu
          header={langs.en.restartGame}
          cancelBtnText={langs.en.noCancel}
          confirmBtnText={langs.en.yesRestart}
          onConfirm={() => backToMenuHandler()}
          onCancel={() => setShowRestartMenu(false)}
        />
      )}
      {showGameResults && <Results />}
    </>
  );
};

export default GameBoard;
