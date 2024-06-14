import React, { useEffect, useState } from 'react';
import '../css/BlogsList.css';

const Blogsmain = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5001/blogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (

    <div>
            <h1>All Blog Entries</h1>
            <div className="blogs-list-2">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post-2">
                        <h2>Title of the Blog :{blog.postTitle}</h2>
                        <p><strong>Date :</strong> {blog.dateNumber} </p>
                        <p><strong>Month:</strong> {blog.dateWord}</p>
                        <p><strong>Author:</strong> {blog.author}</p>
                        <p><strong>Category:</strong> {blog.category}</p>
                        <p><strong>Comments:</strong> {blog.comments}</p>
                        <p><strong>Excerpt:</strong> {blog.postExcerpt}</p>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Blogsmain;
