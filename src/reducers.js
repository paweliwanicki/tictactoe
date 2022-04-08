import { createSlice } from "@reduxjs/toolkit";

export const switchPlayerReducer = createSlice({
  name: "switchPlayer",
  initialState: {
    value: "x",
  },
  reducers: {
    switchPlayer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.player = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { switchPlayer } = switchPlayerReducer.actions;

export default switchPlayerReducer.reducer;
