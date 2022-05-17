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

  // static makeMove = (board,state) => {
  //   const move = Computer.move(board, state.activePlayer);
  //   return Controller.makeMove(move, state);
  // }

  // the main minimax function
  static minimax = (newBoard, computerMark, actPlayer) => {
    const possibleMoves = Computer.getPossibleMoves(newBoard);
    if (possibleMoves.length === 0) return { score: 0 };

    const miniMoves = [];
    const playerMark = computerMark === "x" ? "o" : "x";
    if (Computer.checkIfWin(newBoard, playerMark)) return { score: -10 };
    if (Computer.checkIfWin(newBoard, computerMark)) return { score: 10 };

    possibleMoves.reduce((acc, val) => {
      const move = {};
      move.index = val;
      newBoard[val] = actPlayer;
      const nextPlayerMark = Computer.switchPlayer(actPlayer);
      const result = Computer.minimax(newBoard, computerMark, nextPlayerMark);
      move.score = result.score;
      newBoard[val] = "";
      miniMoves.push(move);
      return acc;
    }, miniMoves);

    let bestScore = actPlayer === computerMark ? -100 : 100;
    return Computer.getBestComputerMove(miniMoves, bestScore);
  };

  static getBestComputerMove = (moves, bestScore) => {
    let move;
    let currentBestScore = bestScore;

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
}

export default Computer;
