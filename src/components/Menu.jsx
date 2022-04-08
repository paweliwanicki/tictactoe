import React from "react";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import MarkSelector from "./MarkSelector";
import GameBoard from "./GameBoard";

const Menu = (props) => {
  return (
    <Container classes="flex-col w-460px max-w-460px min-h-470px">
      <Icon id="logo" viewBox="0 0 72 32" width={72} height={32} />
      <MarkSelector />
      <Button
        classes="py-11px w-full h-67px mb-20px bg-orange hover:bg-orange-light shadow-md-orange-custom"
        text={"NEW GAME (VS CPU)"}
        primary
        type="button"
      />
      <Button
        classes="py-11px w-full h-67px bg-blue hover:bg-blue-light shadow-md-blue-custom"
        text={"NEW GAME  (VS PLAYER)"}
        primary
        type="button"
      />

    <GameBoard />
    </Container>
  );
};

export default Menu;
