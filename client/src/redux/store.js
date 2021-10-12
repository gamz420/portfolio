import { createStore } from "redux";
import initState from "./initState";
import changeTheme from "./reducer/changeThemeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(changeTheme, initState, composeWithDevTools());

export default store;
