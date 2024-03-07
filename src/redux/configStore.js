import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // all Reducer here
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run Saga
sagaMiddleware.run(rootSaga);
