import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom'; // ✅ Combined import
import '../pages/MovieDetails.css';

function MovieDetail() {
  const { type, title } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate(); // ✅ Added this line

  const content = state;

  if (!content) return <div className="not-found">Content Not Found</div>;

  return (
    <div className="detail-page" style={{ backgroundImage: `url(${content.image})` }}>
      <div className="detail-overlay">
        <div className="detail-info">
          <h1>{content.title}</h1>
          <p className="desc">This is a trending {type === 'movies' ? 'movie' : 'series'} on Netflix. Genre: {content.genre}.</p>
          <p className="meta">{content.genre} • ⭐ {content.rating}</p>
          <div className="btn-group">
            <button className="play" onClick={() => navigate('/videoplayer')}>
              ▶ Play
            </button>
            <button className="list">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
