import * as api from '../api';

// action creators
const getPosts = () => async (dispatch) => {
    try {
        // gets data from reponse object
        const { data } = await api.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}
