import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Languages } from "types/Languages";
import { gameLanguage, setLang } from "../../reducers/gameSlice";
import Container from "./Container";
import Icon from "./Icon";
import TextBox from "./TextBox";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  const lang = useSelector(gameLanguage);
  const dispatch = useDispatch();

  const changeLangHandler = (lang) => {
    setOpen(false);
    dispatch(setLang(lang));
  };

  return (
    <Container
      classes={
        "flex items-center text-silver font-bold text-md-custom absolute right-0"
      }
    >
      {open && (
        <Container
          classes={
            "flex items-center w-fit h-40px bg-semi-dark justify-around rounded-15px mx-2 px-5px text-center"
          }
        >
          <Icon
            id={`icon-${Languages.EN}`}
            width={40}
            height={36}
            onClick={() => changeLangHandler(Languages.EN)}
            classes={`px-1`}
          />
          <Icon
            id={`icon-${Languages.PL}`}
            width={40}
            height={36}
            onClick={() => changeLangHandler(Languages.PL)}
            classes={`px-1`}
          />
        </Container>
      )}

      <TextBox onClick={() => setOpen(open ? false : true)}>
        <Icon id={`icon-${lang}`} width={36} height={30} />
      </TextBox>
    </Container>
  );
};

export default LanguageSelector;
