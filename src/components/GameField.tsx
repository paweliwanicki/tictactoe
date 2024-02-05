import { useCallback, useEffect, useState } from 'react';
import { getMarkColor } from '../utils/utils';
import { Mark, MarkComponents } from '../types/Mark';
import Container from './common/Container';
import Icon from './common/Icon';
import { useGame } from 'contexts/GameContext';
import { usePlayer } from 'hooks/usePlayer';

type GameFieldProps = {
  fieldIndex: number;
  mark?: Mark;
};

const GameField = ({ mark, fieldIndex }: GameFieldProps) => {
  const { gameBoard, blockBoard, activePlayer, showResults } = useGame();
  const { move } = usePlayer({ playerMark: activePlayer });

  const [markPreview, setMarkPreview] = useState<boolean>(false);
  const markColor = getMarkColor(mark, MarkComponents.Field);

  const setMarkHandler = useCallback(() => {
    if (!mark && !blockBoard) {
      move(fieldIndex, gameBoard);
    }
  }, [move, gameBoard, blockBoard, fieldIndex, mark]);

  const setMarkPreviewOnMouseEnterHandler = useCallback(() => {
    setMarkPreview(true);
  }, []);

  const setMarkPreviewOnMouseLeaveHandler = useCallback(() => {
    setMarkPreview(false);
  }, []);

  // workaround for markpreview when round is over
  useEffect(() => {
    showResults && setMarkPreview(false);
  }, [showResults]);

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
      {!mark && markPreview && !blockBoard && (
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
