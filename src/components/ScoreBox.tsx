import langs from "../langs/langs";
import Container from "./utils/Container";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { CPU } from "../utils/mixin";
import { gameLanguage, gameMode, playerMark } from "../reducers/gameSlice";
import type { Mark } from "types/Mark";

type ScoreBoxProps = {
  bgColor: string;
  score: ReactNode;
  mark?: Mark;
};

const ScoreBox = ({ bgColor, score, mark }: ScoreBoxProps) => {
  let playerInfo;

  const mode = useSelector(gameMode);
  const player1Mark = useSelector(playerMark);
  const lang = useSelector(gameLanguage);

  if (mark) {
    if (mode === CPU) {
      playerInfo = mark === player1Mark ? langs[lang].you : langs[lang].cpu;
    } else {
      playerInfo = mark === player1Mark ? "p1" : "p2";
    }
  }

  const text = mark ? `${mark} (${playerInfo})` : langs[lang].ties;

  return (
    <Container
      classes={`rounded-15px w-140px h-72px mx-0 justify-center flex items-center 
    ${bgColor}`}
    >
      <Container classes="flex items-center w-fit h-48px flex-col justify-between ">
        <p className="text-s-custom">{text}</p>
        <p className="text-md-custom text-dark font-bold">{score}</p>
      </Container>
    </Container>
  );
};

export default ScoreBox;
