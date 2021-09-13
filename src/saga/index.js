import { all } from 'redux-saga/effects';
import { moviesWatcher, moviesByIDWatcher } from './moviesSaga';

export default function* rootSaga() {
  yield all([moviesWatcher(), moviesByIDWatcher()]);
}