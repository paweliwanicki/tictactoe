import { createSlice } from "@reduxjs/toolkit";

const SCORE_REDUCER_NAME = "score";

export const scoreSlice = createSlice({
  name: SCORE_REDUCER_NAME,
  initialState: {
    x: 0,
    o: 0,
    totalTies: 0,
  },
  reducers: {
    setScore: (state, action) => {
      let score = state[action.payload];
      if (action.payload === "x") {
        state.x = ++score;
      }
      if (action.payload === "o") {
        state.o = ++score;
      }
    },
    setTie: (state) => {
      let tieCounter = state.totalTies;
      state.totalTies = tieCounter + 1;
    },
    resetScores: (state) => {
      state.x = 0;
      state.o = 0;
      state.totalTies = 0;
    },
  },
});

export const xScore = (state) => state.score.x;
export const oScore = (state) => state.score.o;
export const totalTies = (state) => state.score.totalTies;
export const {
  setPlayer1Score,
  setPlayer2Score,
  setTie,
  resetScores,
  setScore,
} = scoreSlice.actions;

export default scoreSlice.reducer;
