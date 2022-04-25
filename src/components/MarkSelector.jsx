import React from "react";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import TextBox from "./utils/TextBox";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerMark, playerMark } from "../reducers/playerSlice";

const MarkSelector = (props) => {
  const mark = useSelector(playerMark);
  const dispatch = useDispatch();

  return (
    <Container classes="bg-semi-dark flex-col rounded-10px shadow-md-semi-dark-custom my-40px pt-24px pb-30px px-24px w-full">
      <TextBox classes="text-sm-custom text-silver mb-24px font-bold">
        PICK PLAYER 1’S MARK
      </TextBox>
      <Container classes="flex flex-row bg-dark py-9px px-8px rounded-10px mb-17px w-full">
        <Button
          classes={`py-11px flex-1 ${
            mark === "x" ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => dispatch(setPlayerMark("x"))}
          type="button"
          text={
            <Icon
              id="icon-x"
              classes="m-auto "
              width={32}
              height={32}
              color={mark === "x" ? "#1A2A33" : "#A8BFC9"}
            />
          }
        />
        <Button
          classes={`py-11px flex-1 ${
            mark === "o" ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => dispatch(setPlayerMark("o"))}
          type="button"
          text={
            <Icon
              id="icon-o"
              classes="m-auto"
              width={32}
              height={32}
              color={mark === "o" ? "#1A2A33" : "#A8BFC9"}
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
