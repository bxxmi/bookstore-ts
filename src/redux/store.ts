import { applyMiddleware, createStore } from "redux";
// 리덕스 개발자 도구를 사용할 수 있게 함
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

const create = () => {
  const sagaMiddleWare = createSagaMiddleware();
  // 스토어 생성과 동시에 미들웨어 사용하도록 선언
  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(sagaMiddleWare, routerMiddleware(history))
    )
  );

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default create;
