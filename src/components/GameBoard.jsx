import React from "react";
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
import { setGameMode, setIsPlaying, gameBoard } from "../reducers/gameSlice";
import { player1Score, player2Score, ties } from "../reducers/scoreSlice";
import ScoreBox from "./ScoreBox";
import Computer from "../controllers/Computer";
import CssVariables from "./utils/cssVariables";

const GameBoard = (props) => {
  const dispatch = useDispatch();

  const board = useSelector(gameBoard);
  console.log(Computer.move(board));

  const activePlayerMark = useSelector(activePlayer);
  const p1Score = useSelector(player1Score);
  const p2Score = useSelector(player2Score);
  const tiesScore = useSelector(ties);
  const player1Mark = useSelector(playerMark);
  const xScore = player1Mark === "x" ? p1Score : p2Score;
  const oScore = player1Mark === "y" ? p1Score : p2Score;

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
          onClick={backToMenuHandler}
        />
      </Container>
      <Container classes="w-full justify-between mb-19px flex-wrap gap-20px">
        {board.map((field, ix) => (
          <GameField
            mark={field}
            key={`field_${ix}`}
            fieldIndex={ix}
          />
        ))}
      </Container>

      <Container classes="justify-between mx-0 w-full">
        <ScoreBox bgColor="bg-blue-light" mark={"x"} score={xScore} />
        <ScoreBox bgColor="bg-silver" score={tiesScore} />
        <ScoreBox bgColor="bg-orange" mark={"o"} score={oScore} />
      </Container>
    </Container>
  );
};

export default GameBoard;
