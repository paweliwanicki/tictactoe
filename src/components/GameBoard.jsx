import React, { useState } from "react";
import GameField from "./GameField";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import TextBox from "./utils/TextBox";
import { useDispatch, useSelector } from "react-redux";
import {
  activePlayer,
  setActivePlayer,
  playerMark,
} from "../reducers/playerSlice";
import { setGameMode, setIsPlaying } from "../reducers/gameSlice";
import ScoreBox from "./ScoreBox";

const GameBoard = (props) => {
  const dispatch = useDispatch();

  const [board, setBoard] = useState([
    "",
    "",
    "", // 0, 1, 2
    "",
    "",
    "", // 3, 4, 5
    "",
    "",
    "", // 6, 7, 8
  ]);

  const activePlayerMark = useSelector(activePlayer);
  const player1Mark = useSelector(playerMark);
  const player2Mark = player1Mark === "x" ? "o" : "x";

  // const winCombinations = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8], // rows
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8], // columns
  //   [0, 4, 8],
  //   [2, 4, 6], // diagonals
  // ];

  const setMark = (index) => {
    const currentBoard = board;
    currentBoard[index] = activePlayerMark;
    setBoard(currentBoard);
  };

  const backToMenuHandler = () => {
    dispatch(setIsPlaying(false));
    dispatch(setGameMode(null));
    dispatch(setActivePlayer("x"));
  };

  return (
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
            color="#A8BFC9"
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
          onClick={backToMenuHandler}
        />
      </Container>
      <Container classes="w-full justify-between mb-19px flex-wrap gap-20px">
        {board.map((field, ix) => (
          <GameField
            mark={field}
            key={`field_${ix}`}
            onClick={() => setMark(ix)}
          />
        ))}
      </Container>

      <Container classes="justify-between mx-0 w-full">
        <ScoreBox bgColor="bg-blue-light" player={player1Mark} score={5} />
        <ScoreBox bgColor="bg-silver" score={5} />
        <ScoreBox bgColor="bg-orange" player={player2Mark} score={5} />
      </Container>
    </Container>
  );
};

export default GameBoard;
