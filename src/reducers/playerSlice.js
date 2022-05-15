import { createSlice } from "@reduxjs/toolkit";

const PLAYER_REDUCER_NAME = 'player';

export const playerSlice = createSlice({
  name: PLAYER_REDUCER_NAME,
  initialState: {
    playerMark: "x",
    activePlayer: "x",
    winnerMark: null,
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
    setWinner: (state, action) => {
      state.winnerMark = action.payload;
    },
  },
});

export const playerMark = (state) => state.player.playerMark;
export const activePlayer = (state) => state.player.activePlayer;
export const winnerMark = (state) => state.player.winnerMark;
export const { switchPlayer, setPlayerMark, setActivePlayer, setWinner } =
  playerSlice.actions;

export default playerSlice.reducer;
