const initialState = [1, 2];

// 2 parameters:
// state & action

// reducer moet altijd een state returnen
export default function matchesReducer(
  state: number[] = initialState,
  action: {} = {}
) {
  return state;
}
