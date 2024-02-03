import { createContext } from "react";
import { GameMode } from "types/GameMode";
import { Language } from "types/Languages";
import { Mark } from "types/Mark";
import { Score } from "types/Score";


export type GameBoard = (Mark | string)[];


export type GameBoardStateTypes = {
  gameBoard: GameBoard;
  blockBoard: boolean;
  score: Score;
}

export type PlayerStateTypes = {
  playerMark: Mark | undefined;
  activePlayer: Mark | undefined;
  winnerMark: Mark | undefined;
}

export type GameStateTypes = {
  isPlaying: boolean;
  gameMode: GameMode | undefined;
  showResults: boolean;
  language: Language;
}

type GameContextType = GameBoardStateTypes & PlayerStateTypes & GameStateTypes

export const GameContext = createContext<GameContextType>({
  isPlaying: false,
  gameMode: undefined,
  gameBoard: [],
  blockBoard: false,
  playerMark: undefined,
  activePlayer: undefined,
  winnerMark: undefined,
  showResults: false,
  score: {
    x: 0,
    o: 0,
    ties: 0,
  },
  language: Language.EN,
});
