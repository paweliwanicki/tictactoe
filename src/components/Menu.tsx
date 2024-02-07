import MarkSelector from './MarkSelector';
import Container from './common/Container';
import Button from './common/Button';
import Icon from './common/Icon';
import langs from '../langs/langs';
import LanguageSelector from './common/LanguageSelector';
import { useCallback, useEffect } from 'react';
import { GameMode } from '../types/GameMode';
import { useGame } from 'contexts/GameContext';
import { Mark } from 'types/Mark';
import { useAiPlayer } from 'hooks/useAiPlayer';
import { useMotionAnimate } from 'motion-hooks';

const Menu = () => {
  const { aiMove } = useAiPlayer();
  const { language, playerMark, gameBoard, startNewGame } = useGame();

  const { play } = useMotionAnimate(
    `#menu-container`,
    { opacity: 1 },
    {
      duration: 0.5,
      easing: 'linear',
    }
  );

  const startGameHandler = useCallback(
    (mode: GameMode) => {
      startNewGame(mode);
      if (mode === GameMode.CPU && playerMark !== Mark.x) aiMove(gameBoard);
    },
    [playerMark, gameBoard, startNewGame, aiMove]
  );

  useEffect(() => {
    void play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      id="menu-container"
      classes="max-w-460px w-92% min-h-470px sm:w-460px opacity-0"
    >
      <Container classes="flex items-center w-full relative">
        <Icon classes="mx-auto" id="logo" width={72} height={32} />
        <LanguageSelector />
      </Container>
      <MarkSelector />
      <Button
        classes="pt-11px pb-18px w-full h-67px mb-20px bg-orange hover:bg-orange-light shadow-md-orange-custom"
        text={langs[language].vsCpu}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.CPU)}
      />
      <Button
        classes="pt-11px pb-18px w-full h-67px bg-blue hover:bg-blue-light shadow-md-blue-custom"
        text={langs[language].vsPlayer}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.PLAYER)}
      />
    </Container>
  );
};

export default Menu;
