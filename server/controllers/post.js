import mongoose from "mongoose";
import PostModel from "../models/post.js";

export const getPosts = async (req, res) => {
  // res.send("getpost called");
  try {
    // will get all the fiels of model
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Here  we will define the logic for insersion
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

// logic for deletion
export const deletePosts = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    await PostModel.findByIdAndRemove(id);
    res.json({ message: "Post deleted" });
  } else {
    return res.status(404).send(`couldn't find post`);
  }
};

export const likePosts = async (req, res) => {
  const { id } = req.params;

  //check if the ID is Valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no post to like`);

  const post = await PostModel.findById(id);

  const updatedPost = await PostModel.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
