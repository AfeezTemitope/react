import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar'
import './NewsFeed.css';
import Head from "../components/Head";

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const usNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4465a3968bbf43aebcbd75f859f16028';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(usNews);
                const data = await response.json();
                setNews(data.articles);
                setFilteredNews(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = news.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNews(filtered);
    };

    if (loading) {
        return <div>Loading news...</div>;
    }

    return (
        <div>
            <Head/>
            <SearchBar onSearch={handleSearch} />


            <div className="news-feed-container">
                <h2>News Feed</h2>
                {filteredNews.length > 0 ? (
                    <ul className="news-list">
                        {filteredNews.map((article, index) => (
                            <li key={index} className="news-article">
                                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No news articles found.</p>
                )}
            </div>
        </div>
    );
};

export default NewsFeed;
