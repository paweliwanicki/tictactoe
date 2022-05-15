import React, { useEffect, useState } from "react";
import GameFields from "./GameFields";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import TextBox from "./utils/TextBox";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  activePlayer,
  setActivePlayer,
  playerMark,
  winnerMark,
} from "../reducers/playerSlice";
import {
  setGameMode,
  setIsPlaying,
  gameBoard,
  setBlockBoard,
  setBoard,
  gameMode,
  showResults,
  setShowResults,
  xScore,
  oScore,
  totalTies,
  startNewGame
} from "../reducers/gameSlice";
// import {
//   // xScore,
//   // oScore,
//   //totalTies,
//   setScore,
//   setTie,
// } from "../reducers/scoreSlice";
import ScoreBox from "./ScoreBox";
import Computer from "../controllers/Computer";
import CssVariables from "../utils/cssVariables";
import SubMenu from "./SubMenu";
import Results from "./Results";
import { GAME_STATE_TIE } from "../utils/mixin";

const GameBoard = (props) => {
  const dispatch = useDispatch();

  const board = useSelector(gameBoard, shallowEqual);
  const activePlayerMark = useSelector(activePlayer);
  const winner = useSelector(winnerMark);
  const tiesScore = useSelector(totalTies);
  const player1Mark = useSelector(playerMark);
  const xTotalScore = useSelector(xScore);
  const oTotalScore = useSelector(oScore);
  const mode = useSelector(gameMode);
  const computerMark = player1Mark === "x" ? "o" : "x";

  const [showRestartMenu, setShowRestartMenu] = useState(false);
  const showResultsState = useSelector(showResults);

  const backToMenuHandler = () => {
    dispatch(startNewGame({isPlaying: false,resetScores: true}))
  };


  // const computerMoveHandler = (newBoard) => {
  //   dispatch(setBlockBoard(true));

  //   const { fieldID, moveTime } = Computer.move(newBoard, computerMark);
  //   if (!winner) {
  //     setTimeout(() => {
  //       dispatch(setBoard({ index: fieldID, mark: computerMark }));
  //       const tmpBoard = [...newBoard];
  //       tmpBoard[fieldID] = computerMark;
  //       const win = Computer.checkIfWin(tmpBoard, computerMark);
  //       setGameWinnerHandler(win, computerMark);
  //       dispatch(setBlockBoard(false));
  //     }, moveTime);
  //   }
  // };

   //computerMoveHandler(board);

  // useEffect(() => {
  //   if (mode === "cpu" && computerMark === "x" && winner === null) {
  //     computerMoveHandler(board);
  //   }
  // }, []);

  return (
    <>
      <Container classes="max-w-full flex-wrap h-623px w-460px max-w-460px">
        <Container classes="w-full gap-20px mb-19px">
          <Container classes="w-140px justify-start">
            <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
          </Container>
          <Container classes="bg-semi-dark text-silver w-140px text-center text-sm-custom pt-13px pb-19px rounded-10px shadow-sm-dark-custom uppercase justify-center align-center">
            <Icon
              id={`icon-${activePlayerMark}`}
              viewBox="0 0 20 20"
              width={20}
              height={20}
              color={CssVariables.silver}
              classes="mr-13px"
            />
            <TextBox classes="font-bold">TURN</TextBox>
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
          <GameFields
            //computerMoveHandler={computerMoveHandler}
            board={board}
            activePlayerMark={activePlayerMark}
          />
        </Container>

        <Container classes="justify-between mx-0 w-full">
          <ScoreBox bgColor="bg-blue" mark={"x"} score={xTotalScore} />
          <ScoreBox bgColor="bg-silver" score={tiesScore} />
          <ScoreBox bgColor="bg-orange" mark={"o"} score={oTotalScore} />
        </Container>
      </Container>
      {showRestartMenu && (
        <SubMenu
          header="RESTART GAME?"
          onConfirm={() => backToMenuHandler()}
          onCancel={() => setShowRestartMenu(false)}
        />
      )}
      {(showResultsState || winner) && (
        <Results
          onCancel={() => dispatch(setShowResults(false))}
          onConfirm={() => dispatch(setShowResults(false))}
        />
      )}
    </>
  );
};

export default GameBoard;
