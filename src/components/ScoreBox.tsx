import langs from "../langs/langs";
import Container from "./utils/Container";
import { ReactNode } from "react";
import type { Mark } from "types/Mark";
import { useGame } from "contexts/GameContext";
import { GameMode } from "types/GameMode";

type ScoreBoxProps = {
  bgColor: string;
  score: ReactNode;
  mark?: Mark;
};

const ScoreBox = ({ bgColor, score, mark }: ScoreBoxProps) => {
  const { gameMode, language, playerMark } = useGame();

  let playerInfo = "";

  if (mark) {
    if (gameMode === GameMode.CPU) {
      playerInfo =
        mark === playerMark ? langs[language].you : langs[language].cpu;
    } else {
      playerInfo = `p${mark === playerMark ? "1" : "2"}`;
    }
  }

  const text = mark ? `${mark} (${playerInfo})` : langs[language].ties;

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
