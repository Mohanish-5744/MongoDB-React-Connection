import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminHome.css';

const AdminHome = () => {
    return (
        <section className="admin-home-section">
            <div className="admin-home-division">
                <h1>Admin Portal</h1>
                <div className="button-container">
                    <Link to="/add-individual-blog" target="_blank">
                        <button className="admin-button">Add Blogs</button>
                    </Link>
                    <Link to="/add-career">
                        <button className="admin-button">Add Careers</button>
                    </Link>
                    <Link to="/add-testimonial">
                        <button className="admin-button">Add Testimonials</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;
