import React, { useState } from "react";
import "./MoviePlayer.css";
import { useNavigate } from "react-router-dom";

function MoviePlayer() {
  const navigate = useNavigate();
  const [quality, setQuality] = useState("720p");

  // Dummy data — you will fetch this from backend later
  const movie = {
    title: "The Gray Man",
    genre: "Action, Thriller",
    rating: "8.5",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMzRkODI4MjItM2ZlOS00ZTlhLTg1YWYtOTMxYzlkZGM3ZDZhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    sources: {
      "480p": "https://www.w3schools.com/html/mov_bbb.mp4",
      "720p": "https://www.w3schools.com/html/movie.mp4",
      "1080p": "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  };

  return (
    <div className="movie-player-container">
      <div
        className="movie-banner"
        style={{ backgroundImage: `url(${movie.thumbnail})` }}
      >
        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>
      </div>

      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.genre}</p>
        <p>⭐ {movie.rating}</p>

        <div className="quality-select">
          <label>Quality: </label>
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
        </div>
      </div>

      <div className="video-wrapper">
        <video
          key={quality}
          controls
          autoPlay
          className="movie-video"
          poster={movie.thumbnail}
        >
          <source src={movie.sources[quality]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MoviePlayer;
