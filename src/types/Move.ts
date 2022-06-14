import { Mark } from "./Mark";

export default interface Move {
  index: number;
  mark: Mark;
  score?: number;
  moveTime?: number;
}