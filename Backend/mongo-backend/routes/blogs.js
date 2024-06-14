const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// Add a new blog
router.post('/add-blog', async (req, res) => {
    const blogData = req.body;

    const newBlog = new Blog(blogData);

    try {
        await newBlog.save();
        res.status(200).send('Blog saved successfully');
    } catch (err) {
        res.status(500).send('Error saving blog');
    }
});

// Get all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).send('Error fetching blogs');
    }
});

module.exports = router;
