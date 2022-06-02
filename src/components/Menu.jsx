import React from "react";
import { useDispatch } from "react-redux";
import MarkSelector from "./MarkSelector";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import { GameMode } from "../types/GameMode";
import { startNewGame } from "../reducers/gameSlice";
import langs from "../langs/langs";

const Menu = () => {
  const dispatch = useDispatch();

  const startGameHandler = (mode) => {
    dispatch(startNewGame({ mode: mode, isPlaying: true }));
  };
  return (
    <Container classes="flex-col w-460px max-w-460px min-h-470px">
      <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
      <MarkSelector />
      <Button
        classes="pt-11px pb-18px w-full h-67px mb-20px bg-orange hover:bg-orange-light shadow-md-orange-custom"
        text={langs.en.vsCpu}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.CPU)}
      />
      <Button
        classes="pt-11px pb-18px w-full h-67px bg-blue hover:bg-blue-light shadow-md-blue-custom"
        text={langs.en.vsPlayer}
        primary
        type="button"
        onClick={() => startGameHandler(GameMode.PLAYER)}
      />
    </Container>
  );
};

export default Menu;
