import CssVariables from "./cssVariables";
import { Mark } from "../types/Mark";

// const
export const GAME_STATE_TIE = "tie";
export const CPU = "cpu";
export const PLAYER = "player";

export const getMarkColor = (
  mark: Mark.x | Mark.o,
  dark: boolean = false,
  activeMark: Mark.x | Mark.o
): string => {
  const darkMode = {
    x: CssVariables.silver,
    o: CssVariables.silver,
    active: CssVariables.dark,
  };

  const active = mark === activeMark;
  const lightMode = { x: CssVariables.blue, o: CssVariables.orange };
  if (active) {
    return dark ? darkMode.active : lightMode[mark];
  }
  return dark ? darkMode[mark] : lightMode[mark];
};
