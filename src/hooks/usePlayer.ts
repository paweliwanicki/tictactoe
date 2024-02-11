import { GameBoard, useGame } from 'contexts/GameContext';
import { useCallback } from 'react';
import { GameMode } from 'types/GameMode';
import { useGameBoardUtils } from './useGameBoardUtils';
import { useAiPlayer } from './useAiPlayer';

type UsePlayer = {
  move: (index: number, board: GameBoard) => void;
};

export const usePlayer = (): UsePlayer => {
  const {
    gameMode,
    activePlayer,
    playerMark,
    player2Mark,
    setGameBoard,
    switchPlayer,
    setGameResult,
  } = useGame();
  const { checkIfWin } = useGameBoardUtils();

  const { aiMove } = useAiPlayer();

  const move = useCallback(
    (index: number, board: GameBoard) => {
      const newBoard = [...board];
      newBoard[index] = activePlayer;
      setGameBoard(newBoard);
      const result = checkIfWin(newBoard, activePlayer);
      if (result) {
        setGameResult(result);
        return;
      }

      switchPlayer(activePlayer === playerMark ? player2Mark : playerMark);
      if (gameMode === GameMode.CPU) aiMove(newBoard);
    },
    [
      gameMode,
      activePlayer,
      playerMark,
      player2Mark,
      switchPlayer,
      aiMove,
      checkIfWin,
      setGameBoard,
      setGameResult,
    ]
  );

  return {
    move,
  };
};
