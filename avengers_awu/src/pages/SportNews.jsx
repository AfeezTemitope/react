import React, { useEffect, useState } from 'react';
import './SportNews.css';
import Head from "../components/Head";
import SearchBar from "../components/SearchBar";

const SportsNews = () => {
    const [news, setNews] = useState([]);        
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const sportsNewsAPI = 'https://newsapi.org/v2/top-headlines?category=sports&apiKey=4465a3968bbf43aebcbd75f859f16028';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(sportsNewsAPI);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNews(data.articles || []);
                setFilteredNews(data.articles || []);
            } catch (error) {
                console.error('Error fetching sports news:', error);
                setNews([]);
                setFilteredNews([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);


    const handleSearch = (searchTerm) => {
        const filtered = news.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (article.description && article.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredNews(filtered);
    };

    if (loading) {
        return <div>Loading sports news...</div>;
    }

    return (
        <div className="sports-news-container">
            <Head />
            <SearchBar onSearch={handleSearch} />
            <h2>Sports News</h2>
            {filteredNews.length > 0 ? (
                <ul className="sports-news-list">
                    {filteredNews.map((article, index) => (
                        <li key={index} className="sports-news-article">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="sports-news-image" />
                            )}
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No sports articles found.</p>
            )}
        </div>
    );
};

export default SportsNews;
