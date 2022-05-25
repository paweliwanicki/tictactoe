import Score from "./Score";
export default interface GameState {
  isPlaying?: boolean;
  gameMode?: string;
  gameBoard: string[];
  blockBoard?: boolean;
  playerMark?: string;
  activePlayer?: string;
  winnerMark?: string;
  showResults?: boolean;
  score?: Score;
}
