import { useCallback } from 'react';
import { GameBoard, useGame } from 'contexts/GameContext';
import { Mark } from 'types/Mark';
import { useGameBoardUtils } from './useGameBoardUtils';
import Move from 'types/Move';

type UsePlayerProps = {
  aiMark: Mark;
};

type UseAiPlayer = {
  move: (board: GameBoard) => Promise<GameBoard>;
};

export const useAiPlayer = ({ aiMark }: UsePlayerProps): UseAiPlayer => {
  const { switchPlayer, setGameBoard, setAiIsMoving, playerMark } = useGame();
  const { checkIfWin, getFieldIndexes } = useGameBoardUtils();

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
      player: Mark
    ): { score: number; index?: number } | Move => {
      const possibleMoves = getFieldIndexes(board);
      if (possibleMoves.length === 0) return { score: 0 };

      const miniMoves: Move[] = [];
      if (checkIfWin(board, playerMark)) return { score: -10 };
      if (checkIfWin(board, aiMark)) return { score: 10 };

      possibleMoves.reduce((acc: Move[], val: number) => {
        board[val] = player;
        const nextPlayer = player === Mark.x ? Mark.o : Mark.x;
        const result = minimax(board, nextPlayer);
        const move: Move = {
          index: val,
          mark: aiMark,
          score: result.score,
        };
        board[val] = '';
        miniMoves.push(move);
        return acc;
      }, miniMoves);

      let bestScore = player === aiMark ? -100 : 100;
      return getBestComputerMove(miniMoves, bestScore);
    },
    [aiMark, playerMark, checkIfWin, getFieldIndexes, getBestComputerMove]
  );

  const move = useCallback(
    async (board: GameBoard): Promise<GameBoard> => {
      setAiIsMoving(true);
      const newBoard = [...board];
      const moveTime = getFieldIndexes(board).length > 4 ? 1000 : 500;
      const { index } = minimax(newBoard, aiMark);
      newBoard[index] = aiMark;
      await new Promise(() =>
        setTimeout(() => {
          setGameBoard(newBoard);
          setAiIsMoving(false);
          if (checkIfWin(newBoard, aiMark)) return;
          switchPlayer(playerMark);
        }, moveTime)
      );
      return newBoard;
    },
    [
      aiMark,
      playerMark,
      minimax,
      setGameBoard,
      setAiIsMoving,
      switchPlayer,
      getFieldIndexes,
      checkIfWin,
    ]
  );

  return {
    move,
  };
};
