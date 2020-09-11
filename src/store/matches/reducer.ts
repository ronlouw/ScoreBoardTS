import { TMatch } from "../../entities/Match";
import { CREATE_MATCH, ADD_PLAYER, TMatchActionTypes } from "./actions";

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
  action: TMatchActionTypes | { type: null } = { type: null }
) {
  switch (action.type) {
    case CREATE_MATCH:
      const newMatch = { id: state.length + 1, players: [] };
      return [...state, newMatch];

    case ADD_PLAYER: {
      const updatedMatches = state.map((match) => {
        if (match.id === action.payload.matchId) {
          const newPlayer = {
            id: Math.floor(Math.random() * 10000),
            name: action.payload.name,
            score: 0,
          };
          return { ...match, players: [...match.players, newPlayer] };
        }

        return match;
      });

      return updatedMatches;
    }

    default:
      return state;
  }
}
