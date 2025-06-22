import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import MovieCard from '../components/Moviecard';
import { movies, webseries } from '../data/movieData';

function Home() {
  const [activeTab, setActiveTab] = useState("movies");
  const navigate = useNavigate();

  const handleCardClick = (item, type) => {
    const encodedTitle = encodeURIComponent(item.title);
    navigate(`/moviedetails/${type}/${encodedTitle}`, { state: item });
  };

  const contentList = activeTab === "movies" ? movies : webseries;

  return (
    <div className="home">
      <Navbar />
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("movies")} className={activeTab === "movies" ? "active" : ""}>Movies</button>
        <button onClick={() => setActiveTab("series")} className={activeTab === "series" ? "active" : ""}>Series</button>
      </div>
      <div className="movie-grid">
        {contentList.map((item, i) => (
          <MovieCard
            key={i}
            {...item}
            onClick={() => handleCardClick(item, activeTab)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
