import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', padding: '20px' }}>
            {blogs.map((blog) => (
                <Card key={blog.id} style={{ width: '18rem' }}>
                    {blog.image && <Card.Img variant="top" src={blog.image} />}
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                        <Button variant="primary" href={blog.link} target="_blank" rel="noopener noreferrer">
                            Learn More!
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default BlogContainer;
