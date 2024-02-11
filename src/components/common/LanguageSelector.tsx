import { useCallback, useEffect, useState } from 'react';
import { useMotionAnimate } from 'motion-hooks';
import { Language } from 'types/Languages';
import { useGame } from 'contexts/GameContext';
import Container from './Container';
import Icon from './Icon';
import TextBox from './TextBox';

const LanguageSelector = () => {
  const { setLanguage, language } = useGame();
  const [open, setOpen] = useState<boolean>(false);

  const { play: openAnimation } = useMotionAnimate(
    `#langs-container`,
    { width: 'fit-content', padding: '0 5px' },
    {
      duration: 0.5,
      easing: 'ease',
    }
  );

  const { play: closeAnimation } = useMotionAnimate(
    `#langs-container`,
    { width: '0', padding: 0 },
    {
      duration: 0.5,
      easing: 'ease',
    }
  );

  const toggleLanguageSelector = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  const changeLangHandler = useCallback(
    (language: Language) => {
      toggleLanguageSelector();
      setLanguage(language);
    },
    [setLanguage, toggleLanguageSelector]
  );

  useEffect(() => {
    open ? openAnimation() : closeAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Container
      classes={
        'flex items-center text-silver font-bold text-md-custom absolute right-0 cursor-pointer'
      }
    >
      <Container
        id="langs-container"
        classes={
          'flex items-center w-fit h-40px bg-semi-dark justify-around rounded-15px mx-2  text-center w-0 px-0'
        }
      >
        <Icon
          id={`icon-${Language.EN}`}
          width={40}
          height={36}
          onClick={() => changeLangHandler(Language.EN)}
          classes={`px-1`}
        />
        <Icon
          id={`icon-${Language.PL}`}
          width={40}
          height={36}
          onClick={() => changeLangHandler(Language.PL)}
          classes={`px-1`}
        />
      </Container>
      <TextBox onClick={toggleLanguageSelector}>
        <Icon id={`icon-${language}`} width={36} height={30} />
      </TextBox>
    </Container>
  );
};

export default LanguageSelector;
