import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MarkSelector from "./MarkSelector";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import { GameMode } from "../types/GameMode";
import { gameLanguage, startNewGame } from "../reducers/gameSlice";
import langs from "../langs/langs";
import LanguageSelector from "./utils/LanguageSelector";

const Menu = () => {
  const dispatch = useDispatch();
  const lang = useSelector(gameLanguage);

  const startGameHandler = (mode) => {
    dispatch(startNewGame({ mode: mode, isPlaying: true }));
  };
  return (
    <Container classes="flex-col max-w-460px w-92% min-h-470px sm:w-460px ">
      <Container classes="w-full relative">
        <Icon classes="mx-auto" id="logo" viewBox="0 0 72 32" width={72} height={32} />
        <LanguageSelector />
      </Container>
      <MarkSelector />
      <Button
        classes="pt-11px pb-18px w-full h-67px mb-20px bg-orange hover:bg-orange-light shadow-md-orange-custom"
        text={langs[lang].vsCpu}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.CPU)}
      />
      <Button
        classes="pt-11px pb-18px w-full h-67px bg-blue hover:bg-blue-light shadow-md-blue-custom"
        text={langs[lang].vsPlayer}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.PLAYER)}
      />
    </Container>
  );
};

export default Menu;
