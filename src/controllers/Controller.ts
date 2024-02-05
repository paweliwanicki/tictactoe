import GameState from "../types/GameState";
import Move from "../types/Move";
import {Score} from "../types/Score";
import { Mark } from "../types/Mark";
import { GameResults } from "../types/GameResults";
import Computer from "./Computer";
import { GAME_STATE_TIE } from "../utils/mixin";

class Controller {
  static winCombinations: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  static CLEAR_BOARD: string[] = ["", "", "", "", "", "", "", "", ""];

  static checkIfWin = (board: string[], player: Mark): GameResults => {
    const playerBoard: number[] = Controller.getFieldIndexes(board, player);
    for (let i = 0; i < Controller.winCombinations.length; i++) {
      const combination: number[] = Controller.winCombinations[i];
      if (combination.every((index) => playerBoard.indexOf(index) > -1)) {
        return player;
      }
    }
    if (Controller.getPossibleMoves(board).length === 0) {
      return GAME_STATE_TIE;
    }
    return;
  };

  static getFieldIndexes = (board: string[], mark: Mark): number[] => {
    return board
      .map((field: string, index: number) => (field === mark ? index : null))
      .filter((el) => el !== null);
  };

  static getPossibleMoves = (board: string[]): number[] => {
    return board
      .map((field: string, index: number) => (field === "" ? index : null))
      .filter((el) => el !== null);
  };

  static setBoard = (move: Move, board: string[]): string[] => {
    const playerMark = move.mark;
    board[move.index] = playerMark;
    return board;
  };

  static switchPlayer(activePlayer: Mark): Mark {
    return activePlayer === Mark.x ? Mark.o : Mark.x;
  }

  static move(move: Move, state: GameState): GameState {
    const newState = { ...state };
    const newBoard: string[] = Controller.setBoard(move, newState.gameBoard);
    const win: GameResults = Controller.checkIfWin(newBoard, move.mark);

    if (win) {
      const currentScore: Score = { ...state.score };
      if (win === GAME_STATE_TIE) {
        currentScore.ties++;
        newState.score = currentScore;
      } else {
        const markKey = move.mark as keyof typeof currentScore;
        const markScore = currentScore[markKey];
        currentScore[markKey] = markScore + 1;
        newState.score = currentScore;
        newState.winnerMark = move.mark;
      }
      newState.showResults = true;
      newState.blockBoard = true;
    } else {
      const nextPlayer: Mark = Controller.switchPlayer(move.mark);
      newState.activePlayer = nextPlayer;
      // computer move
      let cpuState: GameState = Computer.makeMove(newState);
      if (cpuState) {
        return { ...state, ...cpuState };
      }
    }
    return newState;
  }
}

export default Controller;
