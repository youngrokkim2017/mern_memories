import axios from 'axios';

// axios instance
const API = axios.create({ baseURL: 'http://localhost:5000' });

// happens before each one of the requests
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

// const url = 'http://localhost:5000/posts'; // url pointing to the backend route

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${url}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${url}/${id}`);
export const likePost = (id) => API.patch(`/posts/${url}/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);