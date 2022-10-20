import { STATES } from 'mongoose';
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'; 

// reducer accepts state and action
// based on action type, return the action or updated state
export default (state = [], action) => {
    switch (action.type) {
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case UPDATE:
        case LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            // return action.payload;
            return {
                // ...state,
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            }
        case FETCH_BY_SEARCH:
            // return action.payload;
            return {
                ...state,
                posts: action.payload,
            }
        case FETCH_POST:
            // return action.payload;
            return {
                ...state,
                post: action.payload,
            }
        case CREATE:
            return [...state, action.payload];
        default:
            return state;
    }
}