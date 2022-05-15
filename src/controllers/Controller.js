import { GAME_STATE_TIE } from "../utils/mixin";

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

  static getNewState = (state, action) => {
    const newState = { ...state };
    switch (action.type){
      // case 'game\setBoard' : {
      // const move = action.payload;
      // state.gameBoard = newBoard;
      // if (win) {
      //   if (win === GAME_STATE_TIE) {
      //     let ties = state.score.totalTies;
      //     state.score.totalTies = ties++;
      //   } else {
      //     const currentScore = {...state.score};
      //     const markScore = currentScore[move.mark];
      //     currentScore[move.mark] = markScore + 1;
      //     state.score = currentScore;
      //     state.winnerMark = move.mark;
      //   }
      //   state.showResults = true;
      //   state.blockBoard = true;
      // }
     
    }
  };
}

export default Controller;
