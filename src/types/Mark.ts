export enum Mark {
  x = "x",
  o = "o",
}

export interface MarkColors {
  x: string;
  o: string;
  active?: string;
}

export enum MarkComponents {
  Menu = "menu",
  Field = "field",
  Results = "results",
}
