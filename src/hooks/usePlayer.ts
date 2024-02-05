import { GameBoard, useGame } from "contexts/GameContext";
import { useCallback } from "react";
import { GameMode } from "types/GameMode";
import { Mark } from "types/Mark";
import { useGameBoard } from "./useGameBoard";
import { useAiPlayer } from "./useAiPlayer";
import { GAME_STATE_TIE } from "utils/mixin";

type UsePlayerProps = {
  playerMark: Mark;
};

type UseGameBoard = {
  move: (index: number, board: GameBoard) => GameBoard;
};

export const usePlayer = ({ playerMark }: UsePlayerProps): UseGameBoard => {
  const { gameMode, activePlayer, setGameBoard, setWinner, switchPlayer } =
    useGame();
  const { checkIfWin } = useGameBoard();
  const { move: aiMove} = useAiPlayer({
    aiMark: playerMark === Mark.x ? Mark.o : Mark.x,
  });
  

  const move = useCallback(
    (index: number, board: GameBoard): GameBoard => {
      const newBoard = [...board];
      newBoard[index] = activePlayer;
      setGameBoard(newBoard);
      const result = checkIfWin(newBoard, activePlayer);
      if (result && result !== GAME_STATE_TIE) {
        setWinner(activePlayer);
      }

      if (gameMode === GameMode.CPU) {
        aiMove(newBoard);
      } else {
        switchPlayer();
      }

      return newBoard;
    },
    [
      gameMode,
      activePlayer,
      switchPlayer,
      aiMove,
      checkIfWin,
      setGameBoard,
      setWinner,
    ]
  );

  return {
    move,
  };
};
