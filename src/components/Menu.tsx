import MarkSelector from "./MarkSelector";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import langs from "../langs/langs";
import LanguageSelector from "./utils/LanguageSelector";
import { useCallback } from "react";
import { GameMode } from "../types/GameMode";
import { useGame } from "contexts/GameContext";

const Menu = () => {
  const { language, startNewGame } = useGame();

  const startGameHandler = useCallback(
    (mode: GameMode) => {
      startNewGame(mode);
    },
    [startNewGame]
  );
  return (
    <Container classes="max-w-460px w-92% min-h-470px sm:w-460px ">
      <Container classes="flex items-center w-full relative">
        <Icon
          classes="mx-auto"
          id="logo"
          width={72}
          height={32}
        />
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
