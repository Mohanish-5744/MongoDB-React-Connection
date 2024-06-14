import React from 'react';
import { useEffect, useState } from 'react';
// import Footer from '../Components/Footer';
import '../css/blogs-main.css';

const Blogsmain = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/blogs');
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
    <section className="blogs-section">

      <div className="blog-header">
        <div className="background-overlay"></div>
        <div className="blog-title-container">
          <div className="vertical-line"></div>
          <h1 className="blog-title">Blogs</h1>
        </div>
      </div>

   <div className='blogs-section-padding'>
        {blogs.map((blog) => (
          <div key={blog._id} className='blog-post-summary'>
            <div className='date-container'>
              <h1 className='date-number-design'>{blog.dateNumber}</h1>
              <p className='date-word-section'>{blog.dateWord}</p>
            </div>
            <div className="post-details">
              <h2 className="post-title">{blog.postTitle}</h2>
              <div className="post-meta">
                <div className="meta-item">
                  <span>Posted by</span>
                  <strong>{blog.author}</strong>
                </div>
                <div className="meta-item">
                  <span>Categories</span>
                  <strong>{blog.category}</strong>
                </div>
                <div className="meta-item">
                  <span>Comments</span>
                  <strong>{blog.comments}</strong>
                </div>
              </div>
            </div>
            <p className="post-excerpt">{blog.postExcerpt}</p>
            <button className="read-more">READ MORE</button>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Blogsmain;
