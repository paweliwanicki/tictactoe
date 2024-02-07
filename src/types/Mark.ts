import CssVariables from 'cssVariables';

export enum Mark {
  x = 'x',
  o = 'o',
}

export type MarkColors = {
  x: string;
  o: string;
  active?: string;
};

export enum ComponentWithMark {
  Menu = 'menu',
  Field = 'field',
  Results = 'results',
}

export const MARK_COLORS: Record<ComponentWithMark, MarkColors> = {
  [ComponentWithMark.Menu]: {
    x: CssVariables.silver,
    o: CssVariables.silver,
    active: CssVariables.dark,
  },
  [ComponentWithMark.Field]: {
    x: CssVariables.blue,
    o: CssVariables.orange,
  },
  [ComponentWithMark.Results]: {
    x: CssVariables.blue,
    o: CssVariables.orange,
  },
} as const;
