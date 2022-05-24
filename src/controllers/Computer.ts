import Controller from "./Controller";
import Move from "../types/Move";
import Score from "../types/Score";
import { CPU } from "../utils/mixin";

class Computer extends Controller {
  name: string;

  constructor() {
    super();
    this.name = "Computer";
  }

  static getBestMove = (board: Array<string>, computerMark: string): Move => {
    let fieldID: number;
    const newBoard: Array<string> = [...board];
    const possibleMoves: Array<number> = Computer.getPossibleMoves(board);
    // time for make move
    // const moveTime = possibleMoves.length > 5 ? 1000 : 500; -> simulate computer move @TODO with async redux
    if (possibleMoves.length === 9) {
      // First random item on the board full empty board
      fieldID = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]; // Random item
    } else {
      const field = Computer.minimax(newBoard, computerMark, computerMark);
      fieldID = field.index;
    }
    return { index: fieldID, mark: computerMark };
  };

  static makeMove = (state: any): object => {
    let newState = { ...state };
    if (state.gameMode === CPU && state.activePlayer !== state.playerMark) {
      const newBoard = [...state.gameBoard];
      const move: Move = Computer.getBestMove(newBoard, state.activePlayer);
      newBoard[move.index] = move.mark;
      newState.gameBoard = newBoard;
      newState.activePlayer = newState.playerMark;
      newState.blockBoard = false;

      return Controller.move(move, newState);
    }
    return newState;
  };

  // the main minimax function
  static minimax = (
    newBoard: Array<string>,
    computerMark: string,
    actPlayer: string
  ): Score | Move => {
    const possibleMoves = Computer.getPossibleMoves(newBoard);
    if (possibleMoves.length === 0) return { score: 0 };

    const miniMoves: Array<Move> = [];
    const playerMark = computerMark === "x" ? "o" : "x";
    if (Computer.checkIfWin(newBoard, playerMark)) return { score: -10 };
    if (Computer.checkIfWin(newBoard, computerMark)) return { score: 10 };

    possibleMoves.reduce((acc: Array<string>, val: number) => {
      newBoard[val] = actPlayer;
      const nextPlayerMark = Computer.switchPlayer(actPlayer);
      const result = Computer.minimax(newBoard, computerMark, nextPlayerMark);
      const move: Move = {
        index: val,
        mark: actPlayer,
        score: result.score,
      };
      newBoard[val] = "";
      miniMoves.push(move);
      return acc;
    }, miniMoves);

    let bestScore = actPlayer === computerMark ? -100 : 100;
    return Computer.getBestComputerMove(miniMoves, bestScore);
  };

  static getBestComputerMove = (
    moves: Array<Move>,
    bestScore: number
  ): Move => {
    let move: Move;
    let currentBestScore: number = bestScore;

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

  static getComputerMark = (playerMark: string): string => {
    return playerMark === "x" ? "o" : "x";
  };
}

export default Computer;
