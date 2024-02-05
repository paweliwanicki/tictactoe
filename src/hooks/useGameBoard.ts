import { GameBoard } from "contexts/GameContext";
import { useCallback } from "react";
import { GameResults } from "types/GameResults";
import { Mark } from "types/Mark";
import { GAME_STATE_TIE } from "utils/mixin";

const WIN_COMBINATIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

type UseGameBoard = {
  getFieldIndexes: (board: GameBoard, mark?: Mark) => number[];
  checkIfWin: (board: GameBoard, player: Mark) => GameResults;
};

export const useGameBoard = (): UseGameBoard => {
  const getFieldIndexes = useCallback(
    (board: GameBoard, mark: Mark | string = ""): number[] => {
      return board
        .map((field: Mark | string, index: number) =>
          field === mark ? index : undefined
        )
        .filter((el) => el !== undefined);
    },
    []
  );

  const checkIfWin = useCallback(
    (board: GameBoard, player: Mark): GameResults => {
      const playerBoard: number[] = getFieldIndexes(board, player);
      for (let combination of WIN_COMBINATIONS) {
        if (combination.every((index) => playerBoard.indexOf(index) > -1)) {
          return player;
        }
      }
      if (getFieldIndexes(board).length === 0) {
        return GAME_STATE_TIE;
      }
    },
    [getFieldIndexes]
  );

  return {
    getFieldIndexes,
    checkIfWin,
  };
};
