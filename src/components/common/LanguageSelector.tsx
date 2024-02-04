import { useCallback, useState } from "react";
import { Language } from "types/Languages";
import { useGame } from "contexts/GameContext";
import Container from "./Container";
import Icon from "./Icon";
import TextBox from "./TextBox";

const LanguageSelector = () => {
  const { setLanguage, language } = useGame();
  const [open, setOpen] = useState<boolean>(false);

  const toggleLanguageSelector = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  const changeLangHandler = useCallback(
    (language: Language) => {
      toggleLanguageSelector();
      setLanguage(language);
    },
    [setLanguage, toggleLanguageSelector]
  );

  return (
    <Container
      classes={
        "flex items-center text-silver font-bold text-md-custom absolute right-0 cursor-pointer"
      }
    >
      {open && (
        <Container
          classes={
            "flex items-center w-fit h-40px bg-semi-dark justify-around rounded-15px mx-2 px-5px text-center"
          }
        >
          <Icon
            id={`icon-${Language.EN}`}
            width={40}
            height={36}
            onClick={() => changeLangHandler(Language.EN)}
            classes={`px-1`}
          />
          <Icon
            id={`icon-${Language.PL}`}
            width={40}
            height={36}
            onClick={() => changeLangHandler(Language.PL)}
            classes={`px-1`}
          />
        </Container>
      )}

      <TextBox onClick={toggleLanguageSelector}>
        <Icon id={`icon-${language}`} width={36} height={30} />
      </TextBox>
    </Container>
  );
};

export default LanguageSelector;
