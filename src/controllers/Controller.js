import { GAME_STATE_TIE } from "../utils/mixin";
import Computer from "./Computer";

class Controller {
  static winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  static checkIfWin = (board, player) => {
    const playerBoard = Controller.getFieldIndexes(board, player);
    for (let i = 0; i < Controller.winCombinations.length; i++) {
      const combination = Controller.winCombinations[i];
      if (combination.every((index) => playerBoard.indexOf(index) > -1)) {
        return true;
      }
    }
    if (Controller.getPossibleMoves(board).length === 0) {
      return GAME_STATE_TIE;
    }
    return false;
  };

  static getFieldIndexes = (board, mark) => {
    return board
      .map((field, index) => (field === mark ? index : ""))
      .filter(String);
  };

  static getPossibleMoves = (board) => {
    return board.map((cur, index) => (cur === "" ? index : "")).filter(String);
  };

  static setBoard = (move, board) => {
    const playerMark = move.mark;
    board[move.index] = playerMark;
    return board;
  };

  static switchPlayer(activePlayer) {
    return activePlayer === "x" ? "o" : "x";
  }

  static getClearBoard() {
    return ["", "", "", "", "", "", "", "", ""];
  }

  static move(move, state) {
    const newState = { ...state };
    const newBoard = Controller.setBoard(move, newState.gameBoard);
    const win = Controller.checkIfWin(newBoard, move.mark);

    if (win) {
      const currentScore = { ...state.score };
      if (win === GAME_STATE_TIE) {
        currentScore.totalTies++;
        state.score = currentScore;
      } else {
        const markScore = currentScore[move.mark];
        currentScore[move.mark] = markScore + 1;
        newState.score = currentScore;
        newState.winnerMark = move.mark;
      }
      newState.showResults = true;
      newState.blockBoard = true;
    } else {
      const nextPlayer = Controller.switchPlayer(move.mark);
      newState.activePlayer = nextPlayer;
      // computer move
      let cpuState = Computer.makeMove(newState);
      if (cpuState) {
        return { ...state, ...cpuState };
      }
    }
    return newState;
  }
}

export default Controller;
