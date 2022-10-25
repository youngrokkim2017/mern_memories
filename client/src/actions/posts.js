import { FETCH_POST, FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes'; 
import * as api from '../api';

// action creators
export const getPost = (id) => async (dispatch) => {
    try {
        // gets data from reponse object
        const { data } = await api.fetchPost(id);
        dispatch({
            type: FETCH_POST,
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
        // gets data from reponse object
        const { data } = await api.fetchPosts(page);
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        // console.log(data)

        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        });
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        history.push(`/posts/${data._id}`)

        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({
            type: DELETE,
            payload: id
        });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({
            type: LIKE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);

        dispatch({
            type: COMMENT,
            payload: data,
        });

        return data.comments;
    } catch (error) {
        console.log(error);
    }
}
