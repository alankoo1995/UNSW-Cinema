import { combineReducers } from 'redux'
import { RETRIEVE_NOW_SHOWING_MOVIE_LIST, RETRIEVE_COMING_SOON_MOVIE_LIST } from './action-types'

const defaultState = {
    movieList: []
}

function retrieveMovies(state = defaultState , action) {
    let {movieList, ...rest} = state
    switch(action.type) {
        case RETRIEVE_NOW_SHOWING_MOVIE_LIST:
            return {movieList: action.data, ...rest}
        case RETRIEVE_COMING_SOON_MOVIE_LIST:
            return {movieList: action.data, ...rest}
        default:
            return state
    }
}

export default combineReducers({movieList: retrieveMovies})