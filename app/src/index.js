import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import tableReducer from "./reducers/tableReducer";
import loginReducer from "./reducers/loginReducer";
import { filterReducerStatus, filterReducerType } from "./reducers/filterReducer";
import rootSaga from "./sagas/rootSaga";

import App from "./App";

import 'bootswatch/dist/sketchy/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    tableReducer,
    filterReducerStatus,
    filterReducerType,
    loginReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
