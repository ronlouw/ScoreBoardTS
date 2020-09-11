import { createStore } from "redux";
import rootReducer from "./rootreducer";

const devtoolsExtension =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devtoolsExtension);

export default store;
