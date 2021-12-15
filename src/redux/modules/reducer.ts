// root reducer
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import { History } from "history";

// 하위 리듀서들을 하나의 리듀서로 묶는다.
const reducer = (history: History) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default reducer;
