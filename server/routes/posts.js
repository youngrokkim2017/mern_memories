import express from 'express';

// controllers
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
// middleware
import auth from '../middleware/auth.js';

const router = express.Router();

// localhost:5000/posts
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

export default router;