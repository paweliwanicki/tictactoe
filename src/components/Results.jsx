import React from "react";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";
import CssVariables from "./utils/cssVariables";
import { winnerMark, playerMark } from "../reducers/playerSlice";
import { useSelector } from "react-redux";

const Results = (props) => {
  const winner = useSelector(winnerMark);
  const player1Mark = useSelector(playerMark);
  const color = winner === "x" ? CssVariables.blue : CssVariables.orange;
  const textColor = winner === "x" ? "text-blue" : "text-orange";

  return (
    <Container classes="w-full h-full fixed inset-0 align-center">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="w-screen h-266px bg-semi-dark fixed inset-0 justify-center align-center my-auto flex-col">
        <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex ">
          {player1Mark === winner ? "YOU WON!" : "OH NO, YOU LOST…"}
        </TextBox>
        <Container
          classes={`text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center align-center`}
        >
          <Icon
            id={`icon-${winner}`}
            viewBox="0 0 64 64"
            width={64}
            height={64}
            color={color}
            classes="mr-24px"
          />
          <TextBox
            classes={`text-sm-custom text-silver mb-24px font-bold text-xl-custom ${textColor} mb-0`}
          >
            TAKES THE ROUND
          </TextBox>
        </Container>

        <Container classes="flex justify-center align-center ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text="QUIT"
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text="NEXT ROUND"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Results;
