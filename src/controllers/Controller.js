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

  static whoWin = (board) => {
    let winner;
    Controller.winCombinations.forEach((combination) => {
      if (combination.every((index) => board.indexOf(index) > -1)) {
      } else if (!board.includes("") && winner === undefined) {
      }
    });
    return winner;
  };

  static checkIfWin = (board, player) => {
    const playerBoard = Controller.getFieldIndexes(board, player);
    for (let i = 0; i < Controller.winCombinations.length; i++) {
      const combination = Controller.winCombinations[i];
      if (combination.every((index) => playerBoard.indexOf(index) > -1)) {
        return true;
      } else {
        continue;
      }
    }
    if (Controller.getPossibleMoves(board).length === 0) {
      return "tie";
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
}

export default Controller;
