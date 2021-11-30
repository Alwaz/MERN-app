import express from "express";
const router = express.Router();

import { getPosts, createPosts } from "../controllers/post.js";

// get request
router.get("/", getPosts);

// pst request
router.post("/", createPosts);

export default router;
