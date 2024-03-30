import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import taskReducer from "./reducers/taskReducer";
import { createContext } from "react";

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;