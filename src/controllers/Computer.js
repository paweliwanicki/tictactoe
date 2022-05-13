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
    const possibleMoves = Controller.getPossibleMoves(board);
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
    const possibleMoves = Controller.getPossibleMoves(newBoard);
    if (possibleMoves.length === 0) {
      return { score: 0 };
    }

    const playerMark = computerMark === "x" ? "o" : "x";
    if (Controller.checkIfWin(newBoard, playerMark)) {
      return { score: -10 };
    } else if (Controller.checkIfWin(newBoard, computerMark)) {
      return { score: 10 };
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
      if (actPlayer === computerMark) {
        result = Computer.minimax(newBoard, computerMark, playerMark);
      } else {
        result = Computer.minimax(newBoard, computerMark, computerMark);
      }
      move.score = result.score;

      //reset the spot to empty
      newBoard[el] = "";
      minimoves.push(move);
    }

    let bestScore = actPlayer === computerMark ? -100 : 100;
    let bestMove;
    if (bestScore > 0) {
      for (let i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score < bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    } else {
      for (let i = 0; i < minimoves.length; i++) {
        if (minimoves[i].score > bestScore) {
          bestScore = minimoves[i].score;
          bestMove = i;
        }
      }
    }

    return minimoves[bestMove];
  };

  static getBestComputerMove = (moves, bestScore) => {
    let move;
    let currentBestScore = bestScore;
    return () => {
      moves.forEach((el) => {
        if (bestScore > 0) {
          if (el.score < currentBestScore) {
            currentBestScore = el.score;
            move = el;
          }
        } else {
          if (el.score > currentBestScore) {
            currentBestScore = el.score;
            move = el;
          }
        }
      });
      return move;
    };
  };
}

export default Computer;
