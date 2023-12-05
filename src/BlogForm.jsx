import React, { useState } from 'react';

function BlogForm({ addBlog }) {
    const [formData, setFormData] = useState({
        link: '',
        image: '',
        title: '',
        author: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newBlog = await response.json();
                addBlog(newBlog);
                setFormData({ link: '', image: '', title: '', author: '' });
            } else {
                console.error('Failed to add blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', textAlign: 'left' }}>
            <label htmlFor="link">Link:</label>
            <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Enter the link"
                required
            />

            <label htmlFor="image">Image URL:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter the image URL"
                required
            />

            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the title"
                required
            />

            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter the author"
                required
            />

            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                Add Blog
            </button>
        </form>
    );
}

export default BlogForm;
