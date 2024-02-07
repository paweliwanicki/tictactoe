import { useCallback, useEffect, useState } from 'react';
import { MARK_COLORS } from '../types/Mark';
import { Mark, ComponentWithMark } from '../types/Mark';
import { useGame } from 'contexts/GameContext';
import { usePlayer } from 'hooks/usePlayer';
import { useMotionAnimate } from 'motion-hooks';
import Container from './common/Container';
import Icon from './common/Icon';

type GameFieldProps = {
  fieldIndex: number;
  mark?: Mark;
};

const GameField = ({ mark, fieldIndex }: GameFieldProps) => {
  const { gameBoard, blockBoard, activePlayer, showResults } = useGame();
  const { move } = usePlayer();

  const { play: markPreviewAnimation } = useMotionAnimate(
    `.mark-preview-icon`,
    { opacity: 1 },
    {
      duration: 0.3,
      easing: 'linear',
    }
  );

  const [markPreview, setMarkPreview] = useState<boolean>(false);
  const markColor = MARK_COLORS[ComponentWithMark.Field][mark];

  const showMarkPreview = !mark && markPreview && !blockBoard;

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

  useEffect(() => {
    showMarkPreview && void markPreviewAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMarkPreview]);

  return (
    <Container
      id={`gamefield-${fieldIndex}`}
      classes="relative flex items-center min-h-105px min-w-105px sm:w-140px sm:h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 justify-center cursor-pointer translate-y-0"
      onClick={setMarkHandler}
      onMouseEnter={setMarkPreviewOnMouseEnterHandler}
      onMouseLeave={setMarkPreviewOnMouseLeaveHandler}
    >
      {mark && (
        <Icon
          id={`icon-${mark}`}
          color={markColor}
          classes="mark-icon w-52px h-52px sm:w-64px sm:h-64px"
        />
      )}
      {showMarkPreview && (
        <Icon
          id={`icon-${activePlayer}-outline`}
          color={markColor}
          classes="mark-preview-icon w-52px h-52px sm:w-64px sm:h-64px opacity-0"
        />
      )}
    </Container>
  );
};

export default GameField;
