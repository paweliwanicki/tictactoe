import { ReactNode, useState, useMemo } from "react";
import {
  GameBoard,
  GameBoardStateTypes,
  GameContext,
  GameStateTypes,
  PlayerStateTypes,
} from "../contexts/GameContext";
import { GameMode } from "types/GameMode";
import { Mark } from "types/Mark";
import { Score } from "types/Score";
import { Language } from "types/Languages";
import { useGameBoard } from "hooks/useGameBoard";

const CLEAR_GAMEBOARD: GameBoard = ["", "", "", "", "", "", "", "", ""];

type GameProviderProps = {
  children: ReactNode;
};

const GameProvider = ({ children }: GameProviderProps) => {
  const [gameBoardState, setGameBoardState] = useState<GameBoardStateTypes>({
    gameBoard: CLEAR_GAMEBOARD,
    blockBoard: true,
    score: {
      x: 0,
      o: 0,
      ties: 0,
    },
  });

  const [playersState, setPlayersState] = useState<PlayerStateTypes>({
    playerMark: undefined,
    activePlayer: undefined,
    winnerMark: undefined,
  });

  const [gameState, setGameState] = useState<GameStateTypes>({
    isPlaying: false,
    language: Language.EN,
    gameMode: undefined,
    showResults: false,
  });

  const { checkIfWin, getFieldIndexes, switchPlayer } = useGameBoard();

  const value = useMemo(
    () => ({
      ...gameBoardState,
      ...gameState,
      ...playersState,
    }),
    [gameBoardState, gameState, playersState]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
