import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from "../components/Head";
import './CreatePost.css'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Post uploaded successfully!');
                navigate(-1);
            } else {
                alert('Failed to upload post');
            }
        } catch (error) {
            console.error('Error uploading post:', error);
        }
    };

    return (
        <>
        <Head/>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" required />
            <textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Post Caption" required />
            <input type="file" onChange={handleFileChange} accept="image/*,video/*" required />
            <button type="submit">Upload Post</button>
        </form>
        </>
    );
};

export default CreatePost;
