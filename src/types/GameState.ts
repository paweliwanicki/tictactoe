import { Language } from "./Languages";
import { Mark } from "./Mark";
import Score from "./Score";

export default interface GameState {
  gameBoard: string[];
  isPlaying?: boolean;
  gameMode?: string;
  blockBoard?: boolean;
  playerMark?: Mark;
  activePlayer?: Mark;
  winnerMark?: Mark;
  showResults?: boolean;
  score?: Score;
  lang?: Language
}