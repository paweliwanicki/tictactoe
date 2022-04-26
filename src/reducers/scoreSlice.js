import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    player1Score: 0,
    player2Score: 0,
    ties: 0,
  },
  reducers: {
    setPlayer1Score: (state) => {
      state.player1Score = state.player1Score++;
    },
    setPlayer2Score: (state) => {
      state.player1Score = state.player2Score++;
    },
    setTies: (state) => {
      state.ties = state.ties++;
    },
    resetScores: (state) => {
      state.player1Score = 0;
      state.player2Score = 0;
      state.ties = 0;
    },
  },
});

export const player1Score = (state) => state.score.player1Score;
export const player2Score = (state) => state.score.player2Score;
export const ties = (state) => state.score.ties;
export const { setPlayer1Score, setPlayer2Score, setTies, resetScores } =
  scoreSlice.actions;

export default scoreSlice.reducer;
