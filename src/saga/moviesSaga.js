import {put, takeEvery, call} from "redux-saga/effects";
import { setMovies } from "../store/moviesReducer";
import { setMoviesByID } from "../store/detailsReducer";
import {  FETCH_MOVIES, FETCH_MOVIES_BY_ID } from "../store/type";
import { fetchMovies, fetchMovieDetail } from "../common/api/movieApi";



function* fetchMoviesSaga(action) {
    try {
      const result = yield call(fetchMovies, action.search, action.year );
      yield put(setMovies(result.Search))
    } catch (error) {
      console.error(error);
    }
  }

  function* fetchMoviesSagabyId(action) {
    try {
      const result = yield call(fetchMovieDetail, action.id );
      yield put(setMoviesByID(result))
    } catch (error) {
      console.error(error);
    }
  }

export function* moviesByIDWatcher() {

    yield takeEvery(FETCH_MOVIES_BY_ID, fetchMoviesSagabyId)
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesSaga)
}