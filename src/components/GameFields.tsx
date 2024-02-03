import GameField from "./GameField";
import type { Mark } from "types/Mark";
import type { GameBoard } from "contexts/GameContext";

type GameFieldsProps = {
  board: GameBoard;
};

const GameFields = ({ board }: GameFieldsProps) => (
  <>
    {board.map((field: Mark, index: number) => (
      <GameField mark={field} key={`field_${index}`} fieldIndex={index} />
    ))}
  </>
);

export default GameFields;
