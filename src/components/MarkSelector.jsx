import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import TextBox from "./utils/TextBox";
import { getMarkColor } from "../utils/mixin";
import { setPlayerMark, playerMark } from "../reducers/gameSlice";
import langs from "../langs/langs";

const MarkSelector = (props) => {
  const mark = useSelector(playerMark);
  const dispatch = useDispatch();

  return (
    <Container classes="bg-semi-dark flex-col rounded-10px shadow-md-semi-dark-custom my-40px pt-24px pb-30px px-24px w-full">
      <TextBox classes="text-sm-custom text-silver mb-24px font-bold">
        {langs.en.pick1PlayerMark}
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
              color={
                mark === "x" ? getMarkColor("x", true) : getMarkColor("o", true)
              }
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
              color={
                mark === "o" ? getMarkColor("x", true) : getMarkColor("o", true)
              }
            />
          }
        />
      </Container>
      <TextBox classes="text-sm-custom text-silver opacity-50">
        {langs.en.xGoesFirst}
      </TextBox>
    </Container>
  );
};

export default MarkSelector;
