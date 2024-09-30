import React, { useState, useEffect } from 'react';
import './PostList.css'
import Head from "../components/Head";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(posts)



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/allPosts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // data.forEach((post) => { console.log(post) })
                console.log('Fetched Posts:', data.userResponse);
                setPosts(data.userResponse);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/allPosts")
    //         .then(res => res.json())
    //         .then(data => setPosts(data.post))
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div className="viewBlog">
            <Head/>
            <h2>All Blog Post</h2>
            {posts.length > 0 ? (
                <ul className="blog-news-list">
                    {posts.map(post => (
                        <li key={post.id} className="blog-news-article">

                            <img src={post.imageUrl} className="imageUrl"/>
                            <h3>{post.title}</h3>
                            <p>{post.caption}</p>
                            <p>{post.createdAt}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );
};


export default PostList;
