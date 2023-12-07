import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import './BlogContainer.css'; // Assuming you save the provided CSS in a file named BlogContainer.css

function BlogContainer() {
  const [blogs, setBlogs] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addBlog = (newBlog) => {
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add blog:' + response.statusText);
        }
      })
      .then(createdBlog => setBlogs([...blogs, createdBlog]))
      .catch(error => console.error('Error adding blog:', error));
  };

  const deleteBlog = (id) => {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to delete blog:' + response.statusText);
        }
      })
      .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
      .catch(error => console.error('Error deleting blog:', error));
  };

  return (
    <div className="container">
      <button className="toggle-button" onClick={() => setShowBlogForm(!showBlogForm)}>
        {showBlogForm ? 'Hide Blog Form' : 'Show Blog Form'}
      </button>

      {showBlogForm && (
        <div className="blog-form-container">
          <h2 className="blog-form-heading">Add a New Blog</h2>
          <BlogForm addBlog={addBlog} />
        </div>
      )}

      <div className="grid-container">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            {blog.image && <img alt="blog" className="blog-image" src={blog.image} />}
            <div className="blog-content">
              <div className="blog-title">{blog.title}</div>
              <div className="blog-author">{blog.author}</div>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
                Learn More
              </a>
              <button onClick={() => deleteBlog(blog.id)} className="delete-button">
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

