import { legacy_createStore as createStore, combineReducers } from "redux";
import user from "./reducers/user";
import goods from "./reducers/goods";

const rootReducer = combineReducers({ user, goods });
const store = createStore(rootReducer);

export default store;
