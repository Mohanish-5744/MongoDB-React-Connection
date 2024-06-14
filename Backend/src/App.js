import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminHome';
import AddBlogMongo from './components/MongoAddBlogs';
import BlogsMainDecrypt from './components/blogs-main';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/add-individual-blog" element={<AddBlogMongo />} />
          <Route path="/blogs" element={<BlogsMainDecrypt />} />
          {/* You can add more routes here for Add Careers and Add Testimonials */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
