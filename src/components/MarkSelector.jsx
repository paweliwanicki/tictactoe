import React, { useState } from "react";

import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import TextBox from "./utils/TextBox";

const MarkSelector = (props) => {
  const [mark, setMark] = useState("circle");
  return (
    <Container classes="bg-semi-dark flex-col rounded-10px shadow-md-semi-dark-custom my-40px pt-24px pb-30px px-24px w-full">
      <TextBox classes="text-sm-custom text-silver mb-24px">
        PICK PLAYER 1’S MARK
      </TextBox>
      <Container classes="flex flex-row bg-dark py-9px px-8px rounded-10px mb-17px w-full">
        <Button
          classes={`py-11px flex-1 ${
            mark === "cross" ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => setMark("cross")}
          type="button"
          text={
            <Icon
              id="icon-x"
              classes="m-auto "
              width={32}
              height={32}
              color={mark === "cross" ? "#1A2A33" : "#A8BFC9"}
            />
          }
        />
        <Button
          classes={`py-11px flex-1 ${
            mark === "circle" ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => setMark("circle")}
          type="button"
          text={
            <Icon
              id="icon-o"
              classes="m-auto"
              width={32}
              height={32}
              color={mark === "circle" ? "#1A2A33" : "#A8BFC9"}
            />
          }
        />
      </Container>
      <TextBox classes="text-sm-custom text-silver opacity-50">
        REMEMBER : X GOES FIRST
      </TextBox>
    </Container>
  );
};

export default MarkSelector;
