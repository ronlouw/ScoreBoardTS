export const CREATE_MATCH = "CREATE_MATCH";
export const ADD_PLAYER = "ADD_PLAYER";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const DECREMENT_SCORE = "DECREMENT_SCORE";
export const INCREMENTSUPER_SCORE = "INCREMENTSUPER_SCORE";

type TCreateMatchAction = {
  type: typeof CREATE_MATCH;
};

type TIncrementSuperScore = {
  type: typeof INCREMENTSUPER_SCORE;
  payload: {
    playerId: number;
    matchId: number;
  };
};

type TDecrementScore = {
  type: typeof DECREMENT_SCORE;
  payload: {
    playerId: number;
    matchId: number;
  };
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
  | TIncrementScore
  | TDecrementScore;

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
  matchId: number,
): TIncrementScore {
  return {
    type: INCREMENT_SCORE,
    payload: {
      matchId,
      playerId,
    },
  };
}

export function decrementScore(
  playerId: number,
  matchId: number,
): TDecrementScore {
  return {
    type: DECREMENT_SCORE,
    payload: {
      matchId,
      playerId,
    },
  };
}

export function incrementSuperScore(
  playerId: number,
  matchId: number,
): TIncrementSuperScore {
  return {
    type: INCREMENTSUPER_SCORE,
    payload: {
      matchId,
      playerId,
    },
  };
}
