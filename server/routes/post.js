import express from "express";

import { getPosts, createPosts } from "../controllers/post.js";

const router = express.Router();

// get request
router.get("/", getPosts);

// post request
router.post("/", createPosts);

export default router;
