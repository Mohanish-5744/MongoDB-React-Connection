const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    dateNumber: Number,
    dateWord: String,
    postTitle: String,
    author: String,
    category: String,
    comments: String,
    postExcerpt: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
