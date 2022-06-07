import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Computer from "../controllers/Computer";
import Controller from "../controllers/Controller";
import { Mark } from "../types/Mark";
import GameState from "../types/GameState";
import Score from "../types/Score";
import Move from "../types/Move";
import { RootState } from "../store/store";
import { Languages, Language } from "types/Languages";

const GAME_REDUCER_NAME: string = "game";
const storedLang: Language  = localStorage.getItem("lang");
const lang: Language = storedLang ? storedLang : Languages.EN;
//const lang: Language =  Languages.EN;
localStorage.setItem("lang", lang);

const initialState: GameState = {
  isPlaying: false,
  gameMode: null,
  gameBoard: Controller.CLEAR_BOARD,
  blockBoard: false,
  playerMark: Mark.x,
  activePlayer: Mark.x,
  winnerMark: null,
  showResults: false,
  score: {
    x: 0,
    o: 0,
    totalTies: 0,
  },
  lang: lang,
};
export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState,
  reducers: {
    setBoard: (state: GameState, action) => {
      if (action.payload.clear) {
        state.gameBoard = Controller.CLEAR_BOARD;
        return;
      }

      const move: Move = {
        index: action.payload.index,
        mark: action.payload.mark,
      };

      // do computer move if gameMode === CPU
      const newState: GameState = Controller.move(move, state);

      if (newState.winnerMark) {
        state.winnerMark = newState.winnerMark;
      }
      state.gameBoard = newState.gameBoard;
      state.blockBoard = newState.blockBoard;
      state.activePlayer = newState.activePlayer;
      state.score = newState.score;
      state.showResults = newState.showResults;
    },
    startNewGame: (state: GameState, action) => {
      state.gameMode = action.payload.mode;
      state.isPlaying = action.payload.isPlaying;
      state.activePlayer = Mark.x;
      state.blockBoard = false;
      state.gameBoard = Controller.CLEAR_BOARD;
      state.showResults = false;
      state.winnerMark = null;

      if (action.payload.resetScores) {
        const score: Score = {
          x: 0,
          o: 0,
          totalTies: 0,
        };
        state.score = score;
      }

      // computer first?
      const computerMove: GameState = Computer.makeMove(state);
      if (computerMove) {
        state.activePlayer = computerMove.activePlayer;
        state.gameBoard = computerMove.gameBoard;
        state.blockBoard = computerMove.blockBoard;
      }
    },
    setPlayerMark: (state: GameState, action: PayloadAction<Mark>) => {
      state.playerMark = action.payload;
    },
    setLang: (state: GameState, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const gameMode = (state: RootState): string => state.game.gameMode;
export const isPlaying = (state: RootState): boolean => state.game.isPlaying;
export const gameBoard = (state: RootState): string[] => state.game.gameBoard;
export const blockBoard = (state: RootState): boolean => state.game.blockBoard;
export const showResults = (state: RootState): boolean =>
  state.game.showResults;
export const winnerMark = (state: RootState): Mark => state.game.winnerMark;
export const playerMark = (state: RootState): Mark => state.game.playerMark;
export const xScore = (state: RootState): number => state.game.score.x;
export const oScore = (state: RootState): number => state.game.score.o;
export const totalTies = (state: RootState): number =>
  state.game.score.totalTies;
export const activePlayer = (state: RootState): Mark => state.game.activePlayer;
export const gameLanguage = (state: RootState): Language => state.game.lang;

export const { startNewGame, setBoard, setPlayerMark, setLang } =
  gameSlice.actions;

export default gameSlice.reducer;
