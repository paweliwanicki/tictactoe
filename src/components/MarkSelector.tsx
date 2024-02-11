import Container from './common/Container';
import Button from './common/Button';
import Icon from './common/Icon';
import TextBox from './common/TextBox';
import langs from '../langs/langs';
import { MARK_COLORS } from '../types/Mark';
import { Mark, ComponentWithMark } from '../types/Mark';
import { useGame } from 'contexts/GameContext';
import { useCallback } from 'react';

const MarkSelector = () => {
  const { setPlayerMark, playerMark, language } = useGame();

  const setPlayerMarkHandler = useCallback(
    (mark: Mark) => {
      setPlayerMark(mark);
    },
    [setPlayerMark]
  );

  return (
    <Container classes="flex items-center bg-semi-dark flex-col rounded-10px shadow-md-semi-dark-custom my-40px pt-24px pb-30px px-24px w-full">
      <TextBox classes="text-sm-custom text-silver mb-24px font-bold">
        {langs[language].pick1PlayerMark}
      </TextBox>
      <Container classes="flex flex-row bg-dark py-9px px-8px rounded-10px mb-17px w-full">
        {[Mark.x, Mark.o].map((mark: Mark) => (
          <Button
            key={`mark-${mark}`}
            classes={`py-11px flex-1 ${
              playerMark === mark ? 'bg-silver' : 'bg-transparent'
            }`}
            onClick={() => setPlayerMarkHandler(mark)}
            type="button"
            text={
              <Icon
                id={`icon-${mark}`}
                classes="m-auto"
                width={32}
                height={32}
                color={
                  MARK_COLORS[ComponentWithMark.Menu][
                    mark === playerMark ? 'active' : mark
                  ]
                }
              />
            }
          />
        ))}
      </Container>
      <TextBox classes="text-sm-custom text-silver opacity-50">
        {langs[language].xGoesFirst}
      </TextBox>
    </Container>
  );
};

export default MarkSelector;
