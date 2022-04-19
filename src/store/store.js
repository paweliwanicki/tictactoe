import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerSlice";
import gameReducer from "../reducers/gameSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
    game: gameReducer,
  },
});
