import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPlaying: false,
    displayResult: false,
    gameMode: null,
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
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
export const displayResult = (state) => state.game.displayResult;
export const { setIsPlaying, setDisplayResult, setGameMode } =
  gameSlice.actions;

export default gameSlice.reducer;
