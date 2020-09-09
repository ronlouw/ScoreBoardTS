export type TPlayer = {
  id: number;
  name: string;
  score: number;
};

export type TSortingFunction = (playerA: TPlayer, playerB: TPlayer) => number;
