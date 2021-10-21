import { createStore } from "redux";
import initState from "./initState";
import change from "./reducer/changeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(change, initState, composeWithDevTools());

export default store;
