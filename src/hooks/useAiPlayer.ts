import { useCallback } from 'react';
import { GameBoard, useGame } from 'contexts/GameContext';
import { Mark } from 'types/Mark';
import { Move } from 'types/Move';
import { useGameBoardUtils } from './useGameBoardUtils';

type UseAiPlayer = {
  aiMove: (board: GameBoard) => Promise<GameBoard>;
};

export const useAiPlayer = (): UseAiPlayer => {
  const {
    playerMark,
    player2Mark,
    switchPlayer,
    setGameBoard,
    setAiIsMoving,
    setGameResult,
  } = useGame();
  const { checkIfWin, getFieldIndexes } = useGameBoardUtils();

  const getBestComputerMove = useCallback(
    (moves: Move[], player: Mark): Move => {
      const isAiPlayer = player === player2Mark;
      let bestScore = isAiPlayer ? -100 : 100;
      return moves.reduce((best, move) => {
        if (
          (isAiPlayer && move.score > bestScore) ||
          (!isAiPlayer && move.score < bestScore)
        ) {
          bestScore = move.score;
          best = move;
        }
        return best;
      }, null);
    },
    [player2Mark]
  );

  const minimax = useCallback(
    (newBoard: GameBoard, actPlayer: Mark): Partial<Move> => {
      const possibleMoves = getFieldIndexes(newBoard);

      const playerResult = checkIfWin(newBoard, playerMark);
      if (playerResult && playerResult !== 'TIE') return { score: -10 };

      const aiResult = checkIfWin(newBoard, player2Mark);
      if (aiResult && aiResult !== 'TIE') return { score: 10 };

      if (possibleMoves.length === 0) return { score: 0 };

      const miniMoves: Move[] = [];

      possibleMoves.forEach((fieldIndex: number) => {
        newBoard[fieldIndex] = actPlayer;
        const nextPlayer = actPlayer === Mark.x ? Mark.o : Mark.x;
        const result = minimax(newBoard, nextPlayer);
        const move: Move = {
          index: fieldIndex,
          mark: actPlayer,
          score: result.score,
        };
        newBoard[fieldIndex] = '';
        miniMoves.push(move);
      });

      return getBestComputerMove(miniMoves, actPlayer);
    },
    [player2Mark, playerMark, checkIfWin, getFieldIndexes, getBestComputerMove]
  );

  const aiMove = useCallback(
    async (board: GameBoard): Promise<GameBoard> => {
      setAiIsMoving(true);
      const newBoard = [...board];
      const moveTime = getFieldIndexes(board).length > 4 ? 1000 : 500;
      const { index } = minimax(newBoard, player2Mark);
      newBoard[index] = player2Mark;
      await new Promise(() =>
        setTimeout(() => {
          setGameBoard(newBoard);
          setAiIsMoving(false);
          const result = checkIfWin(newBoard, player2Mark);
          if (result) {
            setGameResult(result);
            return;
          }
          switchPlayer(playerMark);
        }, moveTime)
      );

      return newBoard;
    },
    [
      playerMark,
      player2Mark,
      minimax,
      setGameResult,
      setGameBoard,
      setAiIsMoving,
      switchPlayer,
      getFieldIndexes,
      checkIfWin,
    ]
  );

  return {
    aiMove,
  };
};
