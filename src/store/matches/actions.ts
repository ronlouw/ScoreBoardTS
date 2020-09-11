export const CREATE_MATCH = "CREATE_MATCH";

type TCreateMatchAction = {
  type: typeof CREATE_MATCH;
};

export type TMatchActionTypes = TCreateMatchAction;

// Action Creator
export function createMatch(): TCreateMatchAction {
  return {
    type: CREATE_MATCH,
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
