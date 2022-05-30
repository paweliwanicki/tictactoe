import { Mark } from "../utils/mixin";

export default interface Move {
  index: number;
  mark: Mark;
  score?: number;
  moveTime?: number;
}
