import { Post } from "../models/task.js";

export const createPost = async (req, res) => {
  try {
    const { title, desc } = req.body;
    console.log(req.body);
    const response = await Post.create({ title, desc });
    
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (req, res) => {
  try {
    const response = await Post.find();
    if (!response) {
      return res.status(404).json("Data not found");
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async(req ,res) => {
   try {
      const id = req.params.id;
      const response = await Post.findById(id);
      if(!response){
         return res.status(404).json("post is not present corrosponding id");
      }
      res.status(200).json(response);
   } catch (error) {
      console.log(error);
   }
}

export const updatePost = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const id = req.params.id;
    if (!title || !desc) {
      return res.status(402).json("Please fill all fields");
    }
    const response = await Post.findByIdAndUpdate(
      id,
      { title, desc },
      { new: true }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json("id not present");
    }
    await Post.findByIdAndDelete(id);
    res.status(200).json("Task is Deleted");
  } catch (error) {
    console.log(error);
  }
};
