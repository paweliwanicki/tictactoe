import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerSlice";
import gameReducer from "../reducers/gameSlice";
import scoreReducer from "../reducers/scoreSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
    game: gameReducer,
    score: scoreReducer,
  },
});
