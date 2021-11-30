import mongoose from "mongoose";
import PostModel from "../models/post.js";
import "../routes/post.js";

export const getPosts = async (req, res) => {
  try {
    // will get all the fiels of model
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// Here  we will define the logic
export const createPosts = async (req, res) => {
  //    req.body to store data in collection
  const postBody = req.body;
  const newPostImage = new PostModel(postBody); //   creating a new model
  try {
    await newPostImage.save();
    res.status(200).json(newPostImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
