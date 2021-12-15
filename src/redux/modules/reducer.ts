// root reducer
import { combineReducers } from "redux";
import auth from "./auth";

// 하위 리듀서들을 하나의 리듀서로 묶는다.
const reducer = combineReducers({
  auth,
});

export default reducer;
