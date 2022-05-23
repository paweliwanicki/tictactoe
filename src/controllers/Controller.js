class Controller {
  pickedSym;
  IDSplit;
  fieldID;

  winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  constructor() {
    this.fieldID = 9;
  }

  static switchPlayer = (gameMode, activePlayer) => {
    return activePlayer === "comp" ? "player" : "comp";
  };

  static whoWin = (board, winCombinations) => {
    let winner;

    winCombinations.forEach((combination) => {
      if (combination.every((index) => board.indexOf(index) > -1)) {
      } else if (!board.includes("") && winner === undefined) {
      }
    });
    return winner;
  };

  static checkIfWin = (array, player, winCombinations) => {
    let board;
    board = this.getFieldIndexes(array, player);
    for (let i = 0; i < winCombinations.length; i++) {
      var combination = winCombinations[i];
      if (combination.every((index) => board.indexOf(index) > -1)) {
        return true;
      } else {
        continue;
      }
    }
  };
}

export default Controller;
