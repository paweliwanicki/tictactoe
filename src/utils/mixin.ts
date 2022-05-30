import CssVariables from "./cssVariables";

// enums
export const GAME_STATE_TIE = "tie";
export const CPU = "cpu";
export const PLAYER = "player";


export enum Mark {
  x = "x",
  o = "o",
}

export enum GameResults {
  GAME_STATE_TIE,
  WINNER,
}

export enum Players {
  CPU,
  PLAYER,
}

export const getMarkColor = (
  mark: Mark.x | Mark.o,
  dark: boolean = false
): string => {
  const darkMode = { x: CssVariables.dark, o: CssVariables.silver };
  const lightMode = { x: CssVariables.blue, o: CssVariables.orange };

  return dark ? darkMode[mark] : lightMode[mark];
};
