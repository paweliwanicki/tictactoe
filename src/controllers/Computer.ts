// import Controller from './Controller';
// import Move from '../types/Move';
// import { GameMode } from '../types/GameMode';
// import { Mark } from '../types/Mark';
// import GameState from '../types/GameState';

// class Computer extends Controller {
//   name: string;

//   constructor() {
//     super();
//     this.name = GameMode.CPU;
//   }

//   static getBestMove = (board: string[], computerMark: Mark): Move => {
//     let fieldID: number;
//     const newBoard: string[] = [...board];
//     const possibleMoves: number[] = Computer.getPossibleMoves(board);
//     // time for make move
//     // const moveTime = possibleMoves.length > 5 ? 1000 : 500; -> simulate computer move @TODO with async redux
//     if (possibleMoves.length === 9) {
//       // First random item on the board full empty board
//       fieldID = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]; // Random item
//     } else {
//       const field = Computer.minimax(newBoard, computerMark, computerMark);
//       fieldID = field.index;
//     }
//     return { index: fieldID, mark: computerMark };
//   };

//   static makeMove = (state: GameState): GameState => {
//     let newState = { ...state };
//     if (
//       state.gameMode === GameMode.CPU &&
//       state.activePlayer !== state.playerMark
//     ) {
//       const newBoard = [...state.gameBoard];
//       const move: Move = Computer.getBestMove(newBoard, state.activePlayer);
//       newBoard[move.index] = move.mark;
//       newState.gameBoard = newBoard;
//       newState.activePlayer = newState.playerMark;
//       newState.blockBoard = false;

//       return Controller.move(move, newState);
//     }
//     return newState;
//   };

//   // the main minimax function
//   static minimax = (
//     newBoard: string[],
//     computerMark: Mark,
//     actPlayer: Mark
//   ): { score: number; index?: number } | Move => {
//     const possibleMoves = Computer.getPossibleMoves(newBoard);
//     if (possibleMoves.length === 0) return { score: 0 };

//     const miniMoves: Move[] = [];
//     const playerMark = computerMark === Mark.x ? Mark.o : Mark.x;
//     if (Computer.checkIfWin(newBoard, playerMark)) return { score: -10 };
//     if (Computer.checkIfWin(newBoard, computerMark)) return { score: 10 };

//     possibleMoves.reduce((acc: Move[], val: number) => {
//       newBoard[val] = actPlayer;
//       const nextPlayerMark = Computer.switchPlayer(actPlayer);
//       const result = Computer.minimax(newBoard, computerMark, nextPlayerMark);
//       const move: Move = {
//         index: val,
//         mark: actPlayer,
//         score: result.score,
//       };
//       newBoard[val] = '';
//       miniMoves.push(move);
//       return acc;
//     }, miniMoves);

//     let bestScore = actPlayer === computerMark ? -100 : 100;
//     return Computer.getBestComputerMove(miniMoves, bestScore);
//   };

//   static getBestComputerMove = (moves: Move[], bestScore: number): Move => {
//     let move: Move;
//     let currentBestScore: number = bestScore;

//     moves.forEach((el) => {
//       if (bestScore > 0) {
//         if (el.score < currentBestScore) {
//           currentBestScore = el.score;
//           move = el;
//         }
//       } else {
//         if (el.score > currentBestScore) {
//           currentBestScore = el.score;
//           move = el;
//         }
//       }
//     });
//     return move;
//   };

//   static getComputerMark = (playerMark: Mark): string => {
//     return playerMark === Mark.x ? Mark.o : Mark.x;
//   };
// }

// export default Computer;
