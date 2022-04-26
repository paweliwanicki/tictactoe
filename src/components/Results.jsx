import React from "react";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Icon from "./utils/Icon";
import Button from "./utils/Button";

const Results = (props) => {
  const winner = "x"; //test cases

  const color = winner === "x" ? "#31C3BD" : "#F2B137";
  const textColor = winner === "x" ? "text-blue" : "text-orange";

  return (
    <Container classes="w-full h-full bg-dark fixed inset-0 align-center">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="w-screen h-266px bg-semi-dark fixed inset-0 justify-center align-center my-auto flex-col">
        <TextBox classes="text-sm-custom text-silver mb-16px font-bold flex ">
          {winner ? "YOU WON!" : "OH NO, YOU LOST…"}
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
            classes={`w-76px h-52px bg-silver text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text="QUIT"
          />
          <Button
            classes={`w-146px h-52px bg-orange text-dark shadow-sm-orange-custom`}
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
