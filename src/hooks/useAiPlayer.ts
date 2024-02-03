import { GameBoard } from "contexts/GameContext";
import { useCallback } from "react";
import { Mark } from "types/Mark";
import Move from "types/Move";
import { useGameBoard } from "./useGameBoard";

type UsePlayerProps = {
  aiMark: Mark;
};

type UseGameBoard = {
  move: (board: GameBoard) => GameBoard;
};

export const useAiPlayer = ({ aiMark }: UsePlayerProps): UseGameBoard => {
  const { checkIfWin, getFieldIndexes, switchPlayer } = useGameBoard();

  const getBestComputerMove = useCallback(
    (moves: Move[], bestScore: number): Move => {
      let move: Move;
      let currentBestScore: number = bestScore;

      moves.forEach((el) => {
        if (bestScore > 0) {
          if (el.score < currentBestScore) {
            currentBestScore = el.score;
            move = el;
          }
        } else {
          if (el.score > currentBestScore) {
            currentBestScore = el.score;
            move = el;
          }
        }
      });
      return move;
    },
    []
  );

  const minimax = useCallback(
    (
      board: GameBoard,
      actPlayer: Mark
    ): { score: number; index?: number } | Move => {
      const possibleMoves = getFieldIndexes(board);
      if (possibleMoves.length === 0) return { score: 0 };

      const miniMoves: Move[] = [];
      const playerMark = aiMark === Mark.x ? Mark.o : Mark.x;
      if (checkIfWin(board, playerMark)) return { score: -10 };
      if (checkIfWin(board, aiMark)) return { score: 10 };

      possibleMoves.reduce((acc: Move[], val: number) => {
        board[val] = actPlayer;
        const nextPlayerMark = switchPlayer(actPlayer);
        const result = minimax(board, nextPlayerMark);
        const move: Move = {
          index: val,
          mark: actPlayer,
          score: result.score,
        };
        board[val] = "";
        miniMoves.push(move);
        return acc;
      }, miniMoves);

      let bestScore = actPlayer === aiMark ? -100 : 100;
      return getBestComputerMove(miniMoves, bestScore);
    },
    [aiMark, checkIfWin, switchPlayer, getFieldIndexes, getBestComputerMove]
  );

  const move = useCallback(
    (board: GameBoard): GameBoard => {
      const newBoard = [...board];
      const { index } = minimax(board, aiMark);
      newBoard[index] = aiMark;
      return newBoard;
    },
    [aiMark, minimax]
  );

  return {
    move,
  };
};
