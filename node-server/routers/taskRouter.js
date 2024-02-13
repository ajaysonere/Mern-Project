import express from "express";
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/taskController.js";

const router = express.Router();

router.get("/post", getAllPost);
router.post("/post", createPost);
router.get("/post/:id", getPostById);
router.patch("/post/:id", updatePost);
router.delete("/post/:id" ,deletePost)

export default router;
