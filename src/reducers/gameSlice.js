import { createSlice } from "@reduxjs/toolkit";
import Computer from "../controllers/Computer";
import Controller from "../controllers/Controller";
import { GAME_REDUCER_NAME } from "../utils/mixin";

const EMPTY_BOARD = Controller.getClearBoard;

export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState: {
    isPlaying: false,
    gameMode: null,
    gameBoard: EMPTY_BOARD(),
    blockBoard: false,
    playerMark: "x",
    activePlayer: "x",
    winnerMark: null,
    showResults: false,
    score: {
      x: 0,
      o: 0,
      totalTies: 0,
    },
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setBoard: (state, action) => {
      if (action.payload.clear) {
        state.gameBoard = EMPTY_BOARD();
        return;
      }

      const move = {
        index: action.payload.index,
        mark: action.payload.mark,
      };

      const newState = Controller.move(move, state);
      if (newState.winnerMark) {
        state.winnerMark = newState.winnerMark;
      }
      state.gameBoard = newState.gameBoard;
      state.blockBoard = newState.blockBoard;
      state.activePlayer = newState.activePlayer;
      state.score = newState.score;
      state.showResults = newState.showResults;
    },
    setBlockBoard: (state, action) => {
      state.blockBoard = action.payload;
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload;
    },
    startNewGame: (state, action) => {
      state.gameMode = action.payload.mode;
      state.isPlaying = action.payload.isPlaying;
      state.activePlayer = "x";
      state.blockBoard = false;
      state.gameBoard = EMPTY_BOARD();
      state.showResults = false;
      state.winnerMark = null;

      if (action.payload.resetScores) {
        const score = {
          x: 0,
          o: 0,
          totalTies: 0,
        };
        state.score = score;
      }

      // computer first?
      const computerMove = Computer.makeMove(state);
      if (computerMove) {
        state.activePlayer = computerMove.activePlayer;
        state.gameBoard = computerMove.gameBoard;
        state.blockBoard = computerMove.blockBoard;
      }
    },
    setPlayerMark: (state, action) => {
      state.playerMark = action.payload;
    },
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
export const gameBoard = (state) => state.game.gameBoard;
export const blockBoard = (state) => state.game.blockBoard;
export const showResults = (state) => state.game.showResults;
export const winnerMark = (state) => state.game.winnerMark;
export const playerMark = (state) => state.game.playerMark;
export const xScore = (state) => state.game.score.x;
export const oScore = (state) => state.game.score.o;
export const totalTies = (state) => state.game.score.totalTies;
export const activePlayer = (state) => state.game.activePlayer;
export const {
  setIsPlaying,
  setDisplayResult,
  startNewGame,
  setGameMode,
  setBoard,
  setBlockBoard,
  setShowResults,
  setPlayerMark,
  quitGame,
} = gameSlice.actions;

export default gameSlice.reducer;
