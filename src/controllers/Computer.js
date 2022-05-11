import Controller from "./Controller";

class Computer extends Controller {
  minimaxC = 0;

  constructor() {
    super();
    this.name = "Computer";
  }

  static move = (board, computerMark) => {
    let fieldID;
    const newBoard = [...board];
    const possibleMoves = Computer.getPossibleMoves(board);
    // time for make move
    const moveTime = possibleMoves.length > 5 ? 1000 : 500;
    if (possibleMoves.length === 9) {
      // First random item on the board full empty board
      const indexes = newBoard
        .map((field, index) => (field === "" ? index : ""))
        .filter(String);
      fieldID = indexes[Math.floor(Math.random() * indexes.length)]; // Random item
    } else {
      const field = Computer.minimax(newBoard, computerMark, computerMark);
      fieldID = field.index;
    }
    return { fieldID, moveTime };
  };

  static getPossibleMoves = (board) => {
    return board.map((cur, index) => (cur === "" ? index : "")).filter(String);
  };

  // // the main minimax function
  static minimax = (newBoard, computerMark, actPlayer) => {
    //let minimaxCounter = 0;
    //return () => {
    //minimaxCounter++;

    //Computer.minimaxC++;
    const possibleMoves = Computer.getPossibleMoves(newBoard);
    const playerMark = computerMark === "x" ? "o" : "x";
    if (Controller.checkIfWin(newBoard, playerMark)) {
      return { score: -10 };
    } else if (Controller.checkIfWin(newBoard, computerMark)) {
      return { score: 10 };
    } else if (possibleMoves.length === 0) {
      return { score: 0 };
    }

    // for collecting all moves
    const minimoves = [];

    for (let el of possibleMoves) {
      // create a move object to store move (index, score)
      const move = {};

      move.index = el;
      let result;
      //set index of newboard to actPlayer
      newBoard[el] = actPlayer;

      if (actPlayer === "x") {
        result = Computer.minimax(newBoard, computerMark, "o");
        move.score = result.score;
      } else {
        result = Computer.minimax(newBoard, computerMark, "x");
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[el] = "";
      minimoves.push(move);
    }

    let bestMove;
    let bestScore;
    // Get a high score move
    if (actPlayer === computerMark) {
      bestScore = -100; // For checking if score is higher than this
      for (let i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score > bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    } else {
      bestScore = 100;
      for (let i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score < bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    }
    //console.log(Computer.minimaxC);
    return minimoves[bestMove];
  };
  //};
}

export default Computer;
