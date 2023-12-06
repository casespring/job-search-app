import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';

function BlogContainer() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/blogs');
                const data = await response.json();

                setBlogs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const addBlog = async (newBlog) => {
        try {
            const response = await fetch('http://localhost:3000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlog),
            });

            if (response.ok) {
                const createdBlog = await response.json();
                setBlogs([...blogs, createdBlog]);
            } else {
                console.error('Failed to add blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    const deleteBlog = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBlogs(blogs.filter((blog) => blog.id !== id));
            } else {
                console.error('Failed to delete blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>

            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '400px', textAlign: 'center', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                <h2 style={{ marginBottom: '10px' }}>Add a New Blog</h2>
                <BlogForm addBlog={addBlog} />
            </div>

            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', padding: '20px', maxWidth: '1200px' }}>
                {blogs.map((blog) => (
                    <div key={blog.id} style={{ position: 'relative', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                        {blog.image && <img alt="blog" style={{ width: '100%', height: 'auto' }} src={blog.image} />}
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>{blog.title}</div>
                            <div style={{ fontSize: '1rem', color: '#6c757d', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>{blog.author}</div>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: '#007bff', textDecoration: 'none', marginRight: '10px', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                                Learn More
                            </a>
                            <button onClick={() => deleteBlog(blog.id)} style={{ backgroundColor: '#fff', color: 'black', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogContainer;
