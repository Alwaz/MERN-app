import express from "express";
const router = express.Router();
import { getPosts, createPosts } from "../controllers/post.js";

// get request
router.get("/", getPosts);

// post request
router.post("/", createPosts);

// edit
// router.get('/',editPosts);

export default router;
