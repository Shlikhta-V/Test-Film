import {SET_MOVIES_BY_ID,FETCH_MOVIES_BY_ID } from "./type";

const defaultState = [];

export default function detaisReducer(state = defaultState, action) {
    switch(action.type) {
        
        case SET_MOVIES_BY_ID:
           
            return  action.payload;
        default:
            return state;
    }
}

export const setMoviesByID = payload => ({type: SET_MOVIES_BY_ID, payload});
export const fetchMoviesByID = id => ({type: FETCH_MOVIES_BY_ID ,id});