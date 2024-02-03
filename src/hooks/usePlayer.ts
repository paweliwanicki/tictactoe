import { GameBoard } from "contexts/GameContext";
import { useCallback } from "react";
import { Mark } from "types/Mark";

type UsePlayerProps = {
  playerMark: Mark;
};

type UseGameBoard = {
  move: (index: number, board: GameBoard) => GameBoard;
};

export const usePlayer = ({ playerMark }: UsePlayerProps): UseGameBoard => {
  const move = useCallback(
    (index: number, board: GameBoard): GameBoard => {
      const newBoard = [...board];
      newBoard[index] = playerMark;
      return newBoard;
    },
    [playerMark]
  );

  return {
    move,
  };
};
