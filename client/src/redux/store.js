import { createStore } from "redux";
import initState from "./initState";
import changeImg from "./reducer/changeImgReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(changeImg, initState, composeWithDevTools());

export default store;
