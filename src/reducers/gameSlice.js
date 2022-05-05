import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPlaying: false,
    displayResult: false,
    gameMode: null,
    gameBoard: ["","","","","","","","",""]
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setDisplayResult: (state, action) => {
      state.displayResult = action.payload;
    },
    setBoard: (state, action) => {
      state.gameBoard[action.payload.index] = action.payload.mark;
    },
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
export const displayResult = (state) => state.game.displayResult;
export const gameBoard = (state) => state.game.gameBoard;
export const { setIsPlaying, setDisplayResult, setGameMode, setBoard } =
  gameSlice.actions;

export default gameSlice.reducer;
