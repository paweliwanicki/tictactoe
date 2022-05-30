import { Mark } from "../utils/mixin";
import Score from "./Score";

export default interface GameState {
  isPlaying?: boolean;
  gameMode?: string;
  gameBoard: string[];
  blockBoard?: boolean;
  playerMark?: Mark;
  activePlayer?: Mark;
  winnerMark?: Mark;
  showResults?: boolean;
  score?: Score;
}
