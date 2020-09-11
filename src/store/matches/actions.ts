export const CREATE_MATCH = "CREATE_MATCH";
export const ADD_PLAYER = "ADD_PLAYER";

type TCreateMatchAction = {
  type: typeof CREATE_MATCH;
};

type TAddPlayerAction = {
  type: typeof ADD_PLAYER;
  payload: {
    name: string;
    matchId: number;
  };
};

export type TMatchActionTypes = TCreateMatchAction | TAddPlayerAction;

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
      name: name,
      matchId: matchId,
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
