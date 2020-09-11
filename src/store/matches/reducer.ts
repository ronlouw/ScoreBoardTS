import { TMatch } from "../../entities/Match";

const initialState = [
  {
    id: 1,
    players: [{ id: 1, name: "Kelley", score: 3 }],
  },
  {
    id: 2,
    players: [{ id: 2, name: "Rein", score: 2 }],
  },
  {
    id: 3,
    players: [{ id: 3, name: "Violeta", score: 3 }],
  },
];

// 2 parameters:
// state & action

// reducer moet altijd een state returnen
export default function matchesReducer(
  state: TMatch[] = initialState,
  action: {} = {}
) {
  return state;
}
