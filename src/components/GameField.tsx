import { useCallback, useState } from "react";
import { getMarkColor } from "../utils/mixin";
import { Mark, MarkComponents } from "../types/Mark";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import { useGame } from "contexts/GameContext";
import { usePlayer } from "hooks/usePlayer";
import { useGameBoard } from "hooks/useGameBoard";

type GameFieldProps = {
  fieldIndex: number;
  mark?: Mark;
};

const GameField = ({ mark, fieldIndex }: GameFieldProps) => {
  const { gameBoard, blockBoard, activePlayer, setGameBoard } = useGame();
  const { checkIfWin } = useGameBoard();
  const { move } = usePlayer({ playerMark: activePlayer });

  const [markPreview, setMarkPreview] = useState<boolean>(false);
  const markColor = getMarkColor(mark, MarkComponents.Field);

  const setMarkHandler = useCallback(() => {
    if (!mark && !blockBoard) {
      const newBoard = move(fieldIndex, gameBoard);
      setGameBoard(newBoard);
      return checkIfWin(newBoard, activePlayer);
    }
  }, [
    setGameBoard,
    move,
    checkIfWin,
    gameBoard,
    blockBoard,
    activePlayer,
    fieldIndex,
    mark,
  ]);

  const setMarkPreviewOnMouseEnterHandler = useCallback(() => {
    setMarkPreview(true);
  }, []);

  const setMarkPreviewOnMouseLeaveHandler = useCallback(() => {
    setMarkPreview(false);
  }, []);

  return (
    <Container
      classes="flex items-center min-h-105px min-w-105px sm:w-140px sm:h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 justify-center cursor-pointer"
      onClick={setMarkHandler}
      onMouseEnter={setMarkPreviewOnMouseEnterHandler}
      onMouseLeave={setMarkPreviewOnMouseLeaveHandler}
    >
      {mark && (
        <Icon
          id={`icon-${mark}`}
          color={markColor}
          classes="w-52px h-52px sm:w-64px sm:h-64px"
        />
      )}
      {!mark && markPreview && (
        <Icon
          id={`icon-${activePlayer}-outline`}
          color={markColor}
          classes="w-52px h-52px sm:w-64px sm:h-64px"
        />
      )}
    </Container>
  );
};

export default GameField;
