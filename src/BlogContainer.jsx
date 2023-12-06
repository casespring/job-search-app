import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

=======
>>>>>>> main
import BlogForm from './BlogForm';

function BlogContainer() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/blogs');
                const data = await response.json();

<<<<<<< HEAD
        const blogArray = Object.keys(data).map((key) => data[key]);

        setBlogs(blogArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

=======
>>>>>>> main
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

<<<<<<< HEAD
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
=======
        fetchData();
    }, []);
>>>>>>> main

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

            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '400px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Add a New Blog</h2>
                <BlogForm addBlog={addBlog} />
            </div>

            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', padding: '20px', maxWidth: '1200px' }}>
                {blogs.map((blog) => (
                    <div key={blog.id} style={{ position: 'relative', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                        {blog.image && <img alt="blog" style={{ width: '100%', height: 'auto' }} src={blog.image} />}
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{blog.title}</div>
                            <div style={{ fontSize: '1rem', color: '#6c757d' }}>{blog.author}</div>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: '#007bff', textDecoration: 'none', marginRight: '10px' }}>
                                Learn More
                            </a>
                            <button onClick={() => deleteBlog(blog.id)} style={{ backgroundColor: '#fff', color: 'black', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
        </div>
      ))}
    </div>
  );
}

export default BlogContainer;