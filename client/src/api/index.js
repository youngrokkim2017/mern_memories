import axios from 'axios';

// axios instance
const API = axios.create({ baseURL: 'http://localhost:5000/' })

// const url = 'http://localhost:5000/posts'; // url pointing to the backend route

export const fetchPosts = () => API.get(posts);
export const createPost = (newPost) => API.post(posts, newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${url}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${url}/${id}`);
export const likePost = (id) => API.patch(`/posts/${url}/${id}/likePost`);
