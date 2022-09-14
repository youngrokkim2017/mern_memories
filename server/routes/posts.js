import express from 'express';

// controllers
import { getPosts } from '../controllers/posts.js'

const router = express.Router();

// localhost:5000/posts
router.get('/', getPosts);

export default router;