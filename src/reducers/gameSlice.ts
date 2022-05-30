import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Computer from "../controllers/Computer";
import Controller from "../controllers/Controller";
import { Mark } from "../utils/mixin";
import GameState from "../types/GameState";
import Score from "../types/Score";
import Move from "../types/Move";
import { RootState } from "../store/store";

const EMPTY_BOARD = Controller.getClearBoard;

const GAME_REDUCER_NAME: string = "game";

const initialState: GameState = {
  isPlaying: false,
  gameMode: null,
  gameBoard: EMPTY_BOARD(),
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
};
export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState,
  reducers: {
    setBoard: (state: GameState, action) => {
      if (action.payload.clear) {
        state.gameBoard = EMPTY_BOARD();
        return;
      }

      const move: Move = {
        index: action.payload.index,
        mark: action.payload.mark,
      };

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
      state.gameBoard = EMPTY_BOARD();
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
  },
});

export const gameMode = (state: RootState) => state.game.gameMode;
export const isPlaying = (state: RootState) => state.game.isPlaying;
export const gameBoard = (state: RootState) => state.game.gameBoard;
export const blockBoard = (state: RootState) => state.game.blockBoard;
export const showResults = (state: RootState) => state.game.showResults;
export const winnerMark = (state: RootState) => state.game.winnerMark;
export const playerMark = (state: RootState) => state.game.playerMark;
export const xScore = (state: RootState) => state.game.score.x;
export const oScore = (state: RootState) => state.game.score.o;
export const totalTies = (state: RootState) => state.game.score.totalTies;
export const activePlayer = (state: RootState) => state.game.activePlayer;
export const { startNewGame, setBoard, setPlayerMark } = gameSlice.actions;

export default gameSlice.reducer;
