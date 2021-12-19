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

// logic to edit post
// export const editPosts = async(req,res)=>{

// }
