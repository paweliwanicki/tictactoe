import Container from './common/Container';
import TextBox from './common/TextBox';
import Icon from './common/Icon';
import Button from './common/Button';
import langs from '../langs/langs';
import { MARK_COLORS, Mark } from '../types/Mark';
import { ComponentWithMark } from '../types/Mark';
import { useCallback, useEffect } from 'react';
import { useGame } from 'contexts/GameContext';
import { GameMode } from 'types/GameMode';
import { useMotionAnimate } from 'motion-hooks';

const Results = () => {
  const {
    gameMode,
    winnerMark,
    playerMark,
    language,
    showResults,
    startNewGame,
    quitGame,
  } = useGame();

  const markColor = MARK_COLORS[ComponentWithMark.Results][winnerMark];

  let textColor = 'silver';

  let playerInfoText = winnerMark
    ? `${langs[language].player} ${playerMark === winnerMark ? '1' : '2'} ${
        langs[language].wins
      }!`
    : '';

  if (winnerMark) {
    textColor = winnerMark === Mark.x ? 'blue' : 'orange';
    if (gameMode === GameMode.CPU) {
      playerInfoText =
        playerMark === winnerMark
          ? langs[language].youWon
          : langs[language].youLost;
    }
  }

  const { play: showAnimation } = useMotionAnimate(
    `#results-container`,
    { transform: 'translateX(0)' },
    {
      duration: 0.2,
      easing: 'linear',
    }
  );

  const { play: closeAnimation } = useMotionAnimate(
    `#results-container`,
    { transform: 'translateX(-100%)' },
    {
      duration: 0.2,
      easing: 'linear',
    }
  );

  useEffect(() => {
    showResults && void showAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  const quitGameHandler = useCallback(() => {
    closeAnimation().then(() => quitGame());
  }, [quitGame, closeAnimation]);

  const nextRoundHandler = useCallback(() => {
    closeAnimation().then(() => startNewGame(gameMode));
  }, [gameMode, startNewGame, closeAnimation]);

  return (
    showResults && (
      <Container classes="w-full h-full fixed inset-0 ">
        <Container classes="w-screen fixed inset-0  bg-black backdrop opacity-50" />
        <Container
          classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center my-auto flex-col translate-x-full"
          id="results-container"
        >
          {winnerMark && (
            <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex">
              {playerInfoText}
            </TextBox>
          )}
          <Container
            classes={`flex items-center xsm:px-15px text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center  text-center px-13px`}
          >
            {winnerMark && (
              <Icon
                id={`icon-${winnerMark}`}
                viewBox="0 0 64 64"
                color={markColor}
                classes="mx-13px xsm:mr-24px w-52px h-52px sm:w-64px sm:h-64px"
              />
            )}
            <TextBox
              classes={`text-ml-custom font-bold xsm:text-xl-custom text-${
                winnerMark ? textColor : 'silver'
              } mb-0`}
            >
              {!winnerMark
                ? langs[language].roundTied
                : langs[language].takesRound}
            </TextBox>
          </Container>

          <Container classes="flex justify-center  ">
            <Button
              classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
              type="button"
              text={langs[language].quit}
              onClick={quitGameHandler}
            />
            <Button
              classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
              type="button"
              text={langs[language].nextRound}
              onClick={nextRoundHandler}
            />
          </Container>
        </Container>
      </Container>
    )
  );
};

export default Results;
