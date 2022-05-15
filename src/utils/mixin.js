import CssVariables from "./cssVariables";

// enums
export const GAME_STATE_TIE = 'tie';

export const getMarkColor = (mark = "", dark = false) => {
  let markColor = "";
  if (mark) {
    if (dark) {
      markColor = mark === "x" ? CssVariables.dark : CssVariables.silver;
    } else {
      markColor =
        mark === "x" ? CssVariables.blue : CssVariables.orange;
    }
  }

  return markColor;
};
