import React from "react";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import MarkSelector from "./MarkSelector";
import { useDispatch } from "react-redux";
import { setGameMode, setIsPlaying } from "../reducers/gameSlice";

const Menu = (props) => {
  const dispatch = useDispatch();

  const startGameHandler = (mode) => {
    dispatch(setGameMode(mode));
    dispatch(setIsPlaying(true));
  };

  return (
    <Container classes="flex-col w-460px max-w-460px min-h-470px">
      <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
      <MarkSelector />
      <Button
        classes="pt-11px pb-18px w-full h-67px mb-20px bg-orange hover:bg-orange-light shadow-md-orange-custom"
        text={"NEW GAME (VS CPU)"}
        primary
        type="button"
        onClick={() => startGameHandler("cpu")}
      />
      <Button
        classes="pt-11px pb-18px w-full h-67px bg-blue hover:bg-blue-light shadow-md-blue-custom"
        text={"NEW GAME  (VS PLAYER)"}
        primary
        type="button"
        onClick={() => startGameHandler("player")}
      />
    </Container>
  );
};

export default Menu;
