import Controller from "../controllers/Controller";

class Computer extends Controller {
  moves = [];
  s;
  indexes;
  minimaxC = 0;

  constructor() {
    super();
    this.name = "AI";
  }

  static move = (board) => {
    let fieldID;
    // DOMStrings.info.classList.toggle("loading");

    let time;
    const length = Computer.getPossibleMoves(board).length;

    // time for make move
    length > 5 ? (time = 1000) : (time = 500);

    //setTimeout(() => {
    if (length === 9) {
      // First random item on the board full empty board
      const indexes = board
        .map((field, index) => (field === "" ? index : ""))
        .filter(String);
      fieldID = indexes[Math.floor(Math.random() * indexes.length)]; // Random item
    } else {
      const field = Computer.minimax(board, "comp");
      fieldID = field.index;
    }

    //   if (length > 0) {
    //     board[this.fieldID] = this.name;
    //     this.moves.push(this.fieldID);
    //     document.querySelector(this.s).innerHTML = this.symbol;
    //     Controller.whoWin(this.moves);
    //   }
    //   this.minimaxC = 0;

    //   DOMStrings.info.classList.toggle("loading");
    //   blockBoard = false;
    //   Controller.switchPlayer();
    return fieldID;
    //}, time);
  };

  static nextMovePossible = (array) => {
    return array.filter((field) => field === "").length > 0;
  };

  static getPossibleMoves = (board) => {
    return board.map((cur, index) => (cur === "" ? index : "")).filter(String);
  };

  // getBoardForMove = (e, currentPlayer, array) => {
  //   const copiedBoard = [...array];
  //   copiedBoard[e] = currentPlayer.name;
  //   return copiedBoard;
  // };

  static getFieldIndexes = (array, currentPlayer) => {
    return array
      .map((field, index) => (field === currentPlayer.name ? index : ""))
      .filter(String);
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

  // // the main minimax function
  minimax = (newBoard, actPlayer) => {
    this.minimaxC++;
    const possibleMoves = Computer.getPossibleMoves(newBoard);

    if (Controller.checkIfWin(newBoard, "player")) {
      return { score: -10 };
    } else if (Controller.checkIfWin(newBoard, "comp")) {
      return { score: 10 };
    } else if (possibleMoves.length === 0) {
      return { score: 0 };
    }

    // for collecting all moves
    var minimoves = [];

    for (let el of possibleMoves) {
      // create a move object to store move (index, score)
      var move = {};

      move.index = el;

      //set index of newboard to actPlayer
      newBoard[el] = actPlayer.name;
      if (actPlayer == "comp") {
        var result = Computer.minimax(newBoard, "player");
        move.score = result.score;
      } else {
        var result = Computer.minimax(newBoard, "comp");
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[el] = "";
      minimoves.push(move);
    }

    var bestMove;
    // Get a high score move
    if (actPlayer === "comp") {
      var bestScore = -100; // For checking if score is higher than this
      for (var i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score > bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 100;
      for (var i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score < bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    }
    return minimoves[bestMove];
  };
}

export default Computer;
