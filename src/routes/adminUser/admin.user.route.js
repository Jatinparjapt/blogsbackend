// router.admin.js
const express = require('express');
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

router.post("/blog-add", (req,res)=>{
    res.send("added successfully")
})

// ...add more admin-specific routes as needed

module.exports = router;
