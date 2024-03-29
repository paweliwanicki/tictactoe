import { GameResults } from 'hooks/useGameBoardUtils';
import { createContext, useContext } from 'react';
import { GameMode } from 'types/GameMode';
import { Language } from 'types/Languages';
import { Mark } from 'types/Mark';
import { Score } from 'types/Score';

export type GameBoard = (Mark | string)[];

export type GameBoardStateTypes = {
  gameBoard: GameBoard;
  blockBoard: boolean;
};

export type PlayerStateTypes = {
  playerMark: Mark | undefined;
  player2Mark: Mark | undefined;
  activePlayer: Mark | undefined;
  winnerMark: Mark | undefined;
  aiIsMoving: boolean;
};

export type GameStateTypes = {
  score: Score;
  isPlaying: boolean;
  gameMode: GameMode | undefined;
  showResults: boolean;
  showSubMenu: boolean;
  language: Language;
};

type GameActions = {
  startNewGame: (mode: GameMode) => void;
  setLanguage: (language: Language) => void;
  setGameBoard: (board: GameBoard) => void;
  setPlayerMark: (mark: Mark) => void;
  setAiIsMoving: (aiIsMoving: boolean) => void;
  setGameResult: (result: GameResults) => void;
  setScore: (score: Score) => void;
  switchPlayer: (nextPlayer: Mark) => void;
  quitGame: () => void;
};

type GameContextType = GameBoardStateTypes &
  PlayerStateTypes &
  GameStateTypes &
  GameActions;

export const GameContext = createContext<GameContextType>({
  isPlaying: false,
  gameMode: undefined,
  gameBoard: [],
  blockBoard: false,
  playerMark: Mark.x,
  player2Mark: Mark.o,
  activePlayer: undefined,
  winnerMark: undefined,
  showResults: false,
  showSubMenu: false,
  score: {
    x: 0,
    o: 0,
    ties: 0,
  },
  language: Language.EN,
  aiIsMoving: false,
  startNewGame: () => undefined,
  setLanguage: () => undefined,
  setGameBoard: () => undefined,
  setPlayerMark: () => undefined,
  setAiIsMoving: () => undefined,
  setGameResult: () => undefined,
  setScore: () => undefined,
  switchPlayer: () => undefined,
  quitGame: () => undefined,
});

export const useGame = () => useContext(GameContext);
