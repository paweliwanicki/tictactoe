import { useCallback } from "react";
import { GameBoard, useGame } from "contexts/GameContext";
import { Mark } from "types/Mark";
import { useGameBoard } from "./useGameBoard";
import Move from "types/Move";

type UsePlayerProps = {
  aiMark: Mark;
};

type UseGameBoard = {
  move: (board: GameBoard) => Promise<GameBoard>;
};

export const useAiPlayer = ({ aiMark }: UsePlayerProps): UseGameBoard => {
  const { switchPlayer, setGameBoard, setAiIsMoving } = useGame();
  const { checkIfWin, getFieldIndexes } = useGameBoard();

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
        const nextPlayerMark = switchPlayer();
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
    async (board: GameBoard): Promise<GameBoard> => {
      setAiIsMoving(true);
      const newBoard = [...board];
      const { index } = minimax(newBoard, aiMark);
      newBoard[index] = aiMark;
      setGameBoard(newBoard);
      setAiIsMoving(false);
      return newBoard;
    },
    [aiMark, minimax, setGameBoard, setAiIsMoving]
  );

  return {
    move,
  };
};
