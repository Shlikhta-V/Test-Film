import {SET_MOVIES,FETCH_MOVIES } from "./type";

const defaultState = [];

export default function moviesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_MOVIES:
            return  action.payload;
        default:
            return state;
    }
}

export const setMovies = payload => ({type: SET_MOVIES, payload});
export const fetchMovies = (search, year) => ({type: FETCH_MOVIES ,search, year});