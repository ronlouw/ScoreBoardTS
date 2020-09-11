export const CREATE_MATCH = "CREATE_MATCH";
export const ADD_PLAYER = "ADD_PLAYER";
export const INCREMENT_SCORE = "INCREMENT_SCORE";

type TCreateMatchAction = {
  type: typeof CREATE_MATCH;
};

type TIncrementScore = {
  type: typeof INCREMENT_SCORE;
  payload: {
    playerId: number;
    matchId: number;
  };
};

type TAddPlayerAction = {
  type: typeof ADD_PLAYER;
  payload: {
    name: string;
    matchId: number;
  };
};

export type TMatchActionTypes =
  | TCreateMatchAction
  | TAddPlayerAction
  | TIncrementScore;

// Action Creator
export function createMatch(): TCreateMatchAction {
  return {
    type: CREATE_MATCH,
  };
}

export function addPlayer(name: string, matchId: number): TAddPlayerAction {
  return {
    type: ADD_PLAYER,
    payload: {
      name,
      matchId,
    },
  };
}

export function incrementScore(
  playerId: number,
  matchId: number
): TIncrementScore {
  return {
    type: INCREMENT_SCORE,
    payload: {
      matchId,
      playerId,
    },
  };
}

// Inspiration from the docs:

// export const SEND_MESSAGE = 'SEND_MESSAGE'
// export const DELETE_MESSAGE = 'DELETE_MESSAGE'

// interface SendMessageAction {
//   type: typeof SEND_MESSAGE
//   payload: Message
// }

// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE
//   meta: {
//     timestamp: number
//   }
// }

// export type ChatActionTypes = SendMessageAction | DeleteMessageAction
