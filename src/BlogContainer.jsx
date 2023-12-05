import React, { useState, useEffect } from 'react';

function BlogContainer() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        const data = await response.json();

        const blogArray = Object.keys(data).map((key) => data[key]);

        setBlogs(blogArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
        padding: '20px',
      }}
    >
      {blogs.map((blog) => (
        <div key={blog.id} style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          {blog.image && <img style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }} src={blog.image} alt="Blog Thumbnail" />}
          <div style={{ padding: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>{blog.title}</h3>
            <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '16px' }}>{blog.author}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Learn More!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogContainer;
