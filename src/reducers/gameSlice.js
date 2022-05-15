import { createSlice } from "@reduxjs/toolkit";

const GAME_REDUCER_NAME = "game";

export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState: {
    isPlaying: false,
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
    setBoard: (state, action) => {
      if (action.payload.clear) {
        state.gameBoard = ["", "", "", "", "", "", "", "", ""];
      } else {
        const newGameBoard = [...state.gameBoard];
        newGameBoard[action.payload.index] = action.payload.mark;
        state.gameBoard = newGameBoard;
      }
    },
    setBlockBoard: (state, action) => {
      state.blockBoard = action.payload;
    },
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
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
