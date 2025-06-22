import React from 'react';
import './Moviecard.css';

function MovieCard({ title, image, rating, genre, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{genre}</p>
        <span>⭐ {rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
