import CssVariables from "./cssVariables";
import { Mark, MarkColors, MarkComponents } from "../types/Mark";
import { TieResult } from "types/GameResults";

// const
export const GAME_STATE_TIE: TieResult = "tie";
export const CPU = "cpu";
export const PLAYER = "player";

export const getMarkColor = (
  mark: Mark,
  component: MarkComponents,
  activeMark?: Mark
): string => {
  let colors: MarkColors;

  if (component === MarkComponents.Menu) {
    colors = {
      x: CssVariables.silver,
      o: CssVariables.silver,
      active: CssVariables.dark,
    };
  }

  if (
    component === MarkComponents.Field ||
    component === MarkComponents.Results
  ) {
    colors = {
      x: CssVariables.blue,
      o: CssVariables.orange,
    };
  }

  return mark === activeMark ? colors.active : colors[mark];
};
