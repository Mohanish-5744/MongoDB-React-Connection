import React, { useState } from 'react';
import '../css/AddBlogsform.css'
// import { useNavigate } from 'react-router-dom';
const IndividualBlog = () => {
    const [dateNumber, setDateNumber] = useState('');
    const [dateWord, setDateWord] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const [postExcerpt, setPostExcerpt] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const blogDatamongo = {
            dateNumber,
            dateWord,
            postTitle,
            author,
            category,
            comments,
            postExcerpt
        };

        try {
            const response = await fetch('http://localhost:5000/api/add-blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogDatamongo),
            });

            if (response.ok) {
                alert('Blog added successfully');
                // Navigate to the blogs list page
                // navigate('/blogs');
            } else {
                alert('Failed to add blog');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };
    return (
        <>
        <h1>Individual Blog Add</h1>
        <form onSubmit={handleSubmit} className="blog-post-form-1">
            <div className="form-group-1">
                <label>Date Number</label>
                <input
                    type="number"
                    required
                    value={dateNumber}
                    onChange={(e) => setDateNumber(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Date Word</label>
                <input
                    type="text"
                    required
                    value={dateWord}
                    onChange={(e) => setDateWord(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Post Title</label>
                <input
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Category</label>
                <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Comments</label>
                <input
                    type="text"
                    required
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </div>
            <div className="form-group-1">
                <label>Post Excerpt</label>
                <textarea
                    value={postExcerpt}
                    required
                    onChange={(e) => setPostExcerpt(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default IndividualBlog;
