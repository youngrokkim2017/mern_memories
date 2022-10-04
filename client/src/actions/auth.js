import { AUTH } from '../constants/actionTypes'; 
import * as api from '../api';

// if action creators are asynchronous, then need to use redux think
// a function that returns an async function with a dispatch
export const signin = (formData, history) => async (dispatch) => {
    try {
        //  log in user

        // navigate to home page
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //  sign up user

        // navigate to home page
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
