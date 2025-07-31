// router.admin.js
const express = require('express');
const Blog = require('../../models/blog/blog.model.js');
const router = express.Router();

// Example admin routes
router.get('/dashboard', (req, res) => {
  res.send('Admin dashboard');
});

router.get('/users', (req, res) => {
  res.send('List all users');
});

router.delete('/users/:id', (req, res) => {
  res.send('Delete a user');
});

router.get('/blogs', (req, res) => {
  res.send('List all blogs');
});

router.delete('/blogs/:id', (req, res) => {
  res.send('Delete any blog');
});

router.post("/blog-add", async (req,res)=>{
 try {
    console.log("api is headted ")
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json({ message: "Blog added successfully", blog: savedBlog });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

// ...add more admin-specific routes as needed

module.exports = router;
