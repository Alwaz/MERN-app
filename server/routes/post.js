import express from "express";
const router = express.Router();
import {
  getPosts,
  createPosts,
  deletePosts,
  likePosts,
} from "../controllers/post.js";

// get request
router.get("/", getPosts);

// post request
router.post("/", createPosts);

// delete request
router.delete("/:id", deletePosts);

// like patch request
router.patch("/:id/likPost", likePosts);

export default router;
