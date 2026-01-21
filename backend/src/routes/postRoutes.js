import express from "express";
import { createPost,getposts,updatePost,deletePost } from "../controllers/postController.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/getposts", getposts);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

export default router;
