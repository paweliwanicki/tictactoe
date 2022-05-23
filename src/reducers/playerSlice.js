import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerMark: "x",
    activePlayer: "x",
  },
  reducers: {
    switchPlayer: (state) => {
      state.activePlayer = state.activePlayer === "x" ? "o" : "x";
    },
    setPlayerMark: (state, action) => {
      state.playerMark = action.payload;
    },
    setActivePlayer: (state, action) => {
      state.activePlayer = action.payload;
    },
  },
});

export const playerMark = (state) => state.player.playerMark;
export const activePlayer = (state) => state.player.activePlayer;
export const { switchPlayer, setPlayerMark, setActivePlayer } =
  playerSlice.actions;

export default playerSlice.reducer;
