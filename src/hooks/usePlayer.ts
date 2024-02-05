import { GameBoard, useGame } from 'contexts/GameContext';
import { useCallback } from 'react';
import { GameMode } from 'types/GameMode';
import { Mark } from 'types/Mark';
import { useGameBoardUtils } from './useGameBoardUtils';
import { useAiPlayer } from './useAiPlayer';

type UsePlayerProps = {
  playerMark: Mark;
};

type UsePlayer = {
  move: (index: number, board: GameBoard) => void;
};

export const usePlayer = ({ playerMark }: UsePlayerProps): UsePlayer => {
  const player2Mark = playerMark === Mark.x ? Mark.o : Mark.x;
  const { gameMode, activePlayer, setGameBoard, switchPlayer } = useGame();
  const { checkIfWin } = useGameBoardUtils();

  const { move: aiMove } = useAiPlayer({
    aiMark: player2Mark,
  });

  const move = useCallback(
    (index: number, board: GameBoard) => {
      const newBoard = [...board];
      newBoard[index] = activePlayer;
      setGameBoard(newBoard);
      if (checkIfWin(newBoard, activePlayer)) return;
      switchPlayer(player2Mark);
      if (gameMode === GameMode.CPU) aiMove(newBoard);
    },
    [
      gameMode,
      activePlayer,
      player2Mark,
      switchPlayer,
      aiMove,
      checkIfWin,
      setGameBoard,
    ]
  );

  return {
    move,
  };
};
