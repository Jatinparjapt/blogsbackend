// router.user.js
const express = require('express');
const blogModel = require('../../models/blog/blog.model.js');
const router = express.Router();

// Example user routes
router.get('/profile', (req, res) => {
  res.send('User profile');
});

router.get('/blogs', async(req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default to page 1
    const limit = 20;

    const totalBlogs = await blogModel.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);
    const skip = (page - 1) * limit;

    const blogs = await blogModel.find()
      .sort({ publishedAt: -1 }) // latest blogs first
      .skip(skip)
      .limit(limit);

    res.json({
      currentPage: page,
      totalPages,
      totalBlogs,
      blogs
    });
  } catch (err) {
    console.error("Pagination error:", err.message);
    res.status(500).json({ error: "Server error" });
  }

});

// router.post('/blogs', (req, res) => {
//   res.send('Create new blog');
// });

router.get('/blogs/:id', (req, res) => {
  res.send('Get single blog by user');
});

// ...add more user-specific routes as needed

module.exports = router;
