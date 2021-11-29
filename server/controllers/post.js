import mongoose from "mongoose";
import PostModel from "../models/post";

export const getPost = async (req, res) => {
  try {
    // will get all the fiels of model
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// Here  we will define the logic

export const createPost = async (req, res) => {
  //    req.body to store data in collection
  const postBody = req.body;

  //   creating a new model
  const postImage = new PostModel(postBody);

  try {
    await newPostImage.save();
    res.status(200).json(newPostImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
