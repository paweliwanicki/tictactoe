import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPlaying: false,
    displayResult: false,
    gameMode: null,
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    blockBoard: false,
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setDisplayResult: (state, action) => {
      const display = action.payload;
      state.displayResult = display;
      state.isPlaying = display ? false : true;
    },
    setBoard: (state, action) => {
      const newGameBoard = [...state.gameBoard];
      newGameBoard[action.payload.index] = action.payload.mark;
      state.gameBoard = newGameBoard;
    },
    setBlockBoard: (state, action) => {
      state.blockBoard = action.payload;
    },
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
export const displayResult = (state) => state.game.displayResult;
export const gameBoard = (state) => state.game.gameBoard;
export const blockBoard = (state) => state.game.blockBoard;
export const {
  setIsPlaying,
  setDisplayResult,
  setGameMode,
  setBoard,
  setBlockBoard,
} = gameSlice.actions;

export default gameSlice.reducer;
