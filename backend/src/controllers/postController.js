import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newPost = await Post.create({
      name,
      description,
      age,
    });

    res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const getposts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      message: "Posts retrieved successfully",
      data: posts,
    });

  }catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};


const updatePost = async (req, res) => {
    try{
      //basic validation
      if(Object.keys(req.body).length===0){
        return res.status(400).json({message:"Please provide data to update"});

      }
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if(!post) return res.status(404).json({message:"Post not found"});
      
       res.status(200).json({
        message: "Post updated successfully",
        data: post,
      });
    }catch(error){    
      res.status(500).json({
        message: "Server Error",
        error: error.message,
      });

    }

};

const deletePost = async (req, res) => {
    try{
      const deleted = await Post.findByIdAndDelete(req.params.id);

      if(!deleted) return res.status(404).json({message:"Post not found"});
      res.status(200).json({
        message: "Post deleted successfully",
      });

    }catch(error){
      res.status(500).json({
        message: "Server Error",
        error: error.message,
      });

    }
};  
export { createPost, getposts, updatePost, deletePost };