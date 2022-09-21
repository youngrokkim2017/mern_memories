import express from 'express';

// controllers
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router;