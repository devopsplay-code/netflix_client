import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import '../pages/MovieDetails.css';

function MovieDetail() {
  const { type } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const content = state;
  if (!content) return <div className="not-found">Content Not Found</div>;

  const handlePlayClick = () => {
    const movieName = content.title.replace(/ /g, '_');
    navigate('/videoplayer', {
      state: { movieTitle: movieName }
    });
  };

  return (
    <div className="detail-page" style={{ backgroundImage: `url(${content.image})` }}>
      <div className="detail-overlay">
        <div className="detail-info">
          <h1>{content.title}</h1>
          <p className="desc">
            This is a trending {type === 'movies' ? 'movie' : 'series'} on Netflix. Genre: {content.genre}.
          </p>
          <p className="meta">{content.genre} • ⭐ {content.rating}</p>

          <div className="btn-group">
            <button className="play" onClick={handlePlayClick}>
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
