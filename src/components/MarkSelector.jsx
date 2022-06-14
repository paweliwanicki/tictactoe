import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "./utils/Container";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import TextBox from "./utils/TextBox";
import { getMarkColor } from "../utils/mixin";
import { Mark, MarkComponents } from "../types/Mark";
import { setPlayerMark, playerMark, gameLanguage } from "../reducers/gameSlice";
import langs from "../langs/langs";

const MarkSelector = () => {
  const mark = useSelector(playerMark);
  const lang = useSelector(gameLanguage);
  const dispatch = useDispatch();

  return (
    <Container classes="flex items-center bg-semi-dark flex-col rounded-10px shadow-md-semi-dark-custom my-40px pt-24px pb-30px px-24px w-full">
      <TextBox classes="text-sm-custom text-silver mb-24px font-bold">
        {langs[lang].pick1PlayerMark}
      </TextBox>
      <Container classes="flex flex-row bg-dark py-9px px-8px rounded-10px mb-17px w-full">
        <Button
          classes={`py-11px flex-1 ${
            mark === Mark.x ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => dispatch(setPlayerMark(Mark.x))}
          type="button"
          text={
            <Icon
              id="icon-x"
              classes="m-auto"
              width={32}
              height={32}
              color={getMarkColor(Mark.x, MarkComponents.Menu, mark)}
            />
          }
        />
        <Button
          classes={`py-11px flex-1 ${
            mark === Mark.o ? "bg-silver" : "bg-transparent"
          }`}
          onClick={() => dispatch(setPlayerMark(Mark.o))}
          type="button"
          text={
            <Icon
              id="icon-o"
              classes="m-auto"
              width={32}
              height={32}
              color={getMarkColor(Mark.o, MarkComponents.Menu, mark)}
            />
          }
        />
      </Container>
      <TextBox classes="text-sm-custom text-silver opacity-50">
        {langs[lang].xGoesFirst}
      </TextBox>
    </Container>
  );
};

export default MarkSelector;
