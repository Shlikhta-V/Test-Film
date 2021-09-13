  
import {applyMiddleware, combineReducers, createStore} from "redux";
import moviesReducer from "./moviesReducer";
import detaisReducer from "./detailsReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
   moviesReducer,
   detaisReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)