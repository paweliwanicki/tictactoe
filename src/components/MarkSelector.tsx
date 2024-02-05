import Container from './common/Container';
import Button from './common/Button';
import Icon from './common/Icon';
import TextBox from './common/TextBox';
import langs from '../langs/langs';
import { getMarkColor } from '../utils/utils';
import { Mark, MarkComponents } from '../types/Mark';
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
        <Button
          classes={`py-11px flex-1 ${
            playerMark === Mark.x ? 'bg-silver' : 'bg-transparent'
          }`}
          onClick={() => setPlayerMarkHandler(Mark.x)}
          type="button"
          text={
            <Icon
              id="icon-x"
              classes="m-auto"
              width={32}
              height={32}
              color={getMarkColor(Mark.x, MarkComponents.Menu, playerMark)}
            />
          }
        />
        <Button
          classes={`py-11px flex-1 ${
            playerMark === Mark.o ? 'bg-silver' : 'bg-transparent'
          }`}
          onClick={() => setPlayerMarkHandler(Mark.o)}
          type="button"
          text={
            <Icon
              id="icon-o"
              classes="m-auto"
              width={32}
              height={32}
              color={getMarkColor(Mark.o, MarkComponents.Menu, playerMark)}
            />
          }
        />
      </Container>
      <TextBox classes="text-sm-custom text-silver opacity-50">
        {langs[language].xGoesFirst}
      </TextBox>
    </Container>
  );
};

export default MarkSelector;
