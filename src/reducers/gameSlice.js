import { createSlice } from "@reduxjs/toolkit";
import Computer from "../controllers/Computer";
import Controller from "../controllers/Controller";
import { CPU, GAME_STATE_TIE } from "../utils/mixin";

const GAME_REDUCER_NAME = "game";
const EMPTY_BOARD = ["", "", "", "", "", "", "", "", ""];

export const gameSlice = createSlice({
  name: GAME_REDUCER_NAME,
  initialState: {
    isPlaying: false,
    gameMode: null,
    gameBoard: EMPTY_BOARD,
    blockBoard: false,
    playerMark: "x",
    activePlayer: "x",
    winnerMark: null,
    showResults: false,
    score: {
      x: 0,
      o: 0,
      totalTies: 0,
    },
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
        state.gameBoard = EMPTY_BOARD;
        return;
      }

      const move = {
        index: action.payload.index,
        mark: action.payload.mark,
      };

      const tmpBoard = [...state.gameBoard];
      const newBoard = Controller.setBoard(move, tmpBoard);
      const win = Controller.checkIfWin(newBoard, move.mark);

      state.gameBoard = newBoard;
      if (win) {
        const currentScore = { ...state.score };
        if (win === GAME_STATE_TIE) {
          currentScore.totalTies++;
          state.score = currentScore;
        } else {
          const markScore = currentScore[move.mark];
          currentScore[move.mark] = markScore + 1;
          state.score = currentScore;
          state.winnerMark = move.mark;
        }
        state.showResults = true;
        state.blockBoard = true;
      } else {
        const nextPlayer = move.mark === "x" ? "o" : "x";
        state.activePlayer = nextPlayer;

        // computer move
        if (state.gameMode === CPU && !win) {
          const { fieldID, moveTime } = Computer.move(
            newBoard,
            state.activePlayer
          );
          // setTimeout(() => {
          newBoard[fieldID] = state.activePlayer;
          state.activePlayer = state.activePlayer === "x" ? "o" : "x";
          state.gameBoard = newBoard;
          state.blockBoard = false;
          //  }, moveTime);
        }
      }
    },
    setBlockBoard: (state, action) => {
      console.log("setBlockBoard");
      state.blockBoard = action.payload;
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload;
    },
    startNewGame: (state, action) => {
      state.gameMode = action.payload.mode;
      state.isPlaying = action.payload.isPlaying;
      state.activePlayer = "x";
      state.blockBoard = false;
      state.gameBoard = EMPTY_BOARD;

      if (action.payload.resetScores) {
        const score = {
          x: 0,
          o: 0,
          totalTies: 0,
        };
        state.score = score;
      }
    },
    setPlayerMark: (state, action) => {
      state.playerMark = action.payload;
    },
  },
});

export const gameMode = (state) => state.game.gameMode;
export const isPlaying = (state) => state.game.isPlaying;
export const gameBoard = (state) => state.game.gameBoard;
export const blockBoard = (state) => state.game.blockBoard;
export const showResults = (state) => state.game.showResults;
export const winnerMark = (state) => state.game.winnerMark;
export const playerMark = (state) => state.game.playerMark;
export const xScore = (state) => state.game.score.x;
export const oScore = (state) => state.game.score.o;
export const totalTies = (state) => state.game.score.totalTies;
export const {
  setIsPlaying,
  setDisplayResult,
  startNewGame,
  setGameMode,
  setBoard,
  setBlockBoard,
  setShowResults,
  setPlayerMark,
  quitGame,
} = gameSlice.actions;

export default gameSlice.reducer;
