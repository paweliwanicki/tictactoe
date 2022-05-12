import React from "react";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import CssVariables from "./utils/cssVariables";
import {
  winnerMark,
  playerMark,
  setActivePlayer,
  setWinner,
} from "../reducers/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  gameMode,
  setBoard,
  setDisplayResult,
  setIsPlaying,
} from "../reducers/gameSlice";
import { resetScores } from "../reducers/scoreSlice";

const Results = (props) => {
  const dispatch = useDispatch();
  const winner = useSelector(winnerMark);
  const player1Mark = useSelector(playerMark);
  const color = winner === "x" ? CssVariables.blue : CssVariables.orange;
  let textColor = "text-silver";
  if (winner) {
    textColor = winner === "x" ? "text-blue" : "text-orange";
  }
  const mode = useSelector(gameMode);

  const quitGameHandler = () => {
    dispatch(setDisplayResult(false));
    dispatch(resetScores());
    dispatch(setBoard({ clear: true }));
  };

  const nextRoundHandler = () => {
    dispatch(setDisplayResult(false));
    dispatch(setBoard({ clear: true }));
    dispatch(setWinner(null));
    dispatch(setIsPlaying(false));
    dispatch(setActivePlayer("x"));
    dispatch(setIsPlaying(true));
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
                color={color}
                classes="mr-24px"
              />
          )}
              <TextBox
                classes={`text-sm-custom mb-24px font-bold text-xl-custom ${textColor} mb-0`}
              >
                {!winner ? 'ROUND TIED' : 'TAKES THE ROUND'}
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

export default Results;
