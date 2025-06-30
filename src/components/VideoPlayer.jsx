import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VideoPlayer.css';

const videoSources = {
  'Extraction': {
    '1080p': 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Extraction/converted/extraction_1080p.mp4',
    '720p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Extraction/converted/extraction_720p.mp4',
    '480p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Extraction/converted/extraction_480p.mp4'
  },
  'Army_of_the_Dead': {
    '1080p': 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Army_of_the_Dead/converted/Army_of_the_Dead_1080p.mp4',
    '720p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Army_of_the_Dead/converted/Army_of_the_Dead_720p.mp4',
    '480p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Army_of_the_Dead/converted/Army_of_the_Dead_480p.mp4'
  },
  'Project_Power': {
    '1080p': 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Project_Power/converted/Project_Power_1080p.mp4',
    '720p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Project_Power/converted/Project_Power_720p.mp4',
    '480p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Project_Power/converted/Project_Power_480p.mp4'
  },
  'Bird_Box': {
    '1080p': 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Bird_Box/converted/Bird_Box_1080p.mp4',
    '720p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Bird_Box/converted/Bird_Box_720p.mp4',
    '480p'  : 'https://d1e9wnn6p8ksq9.cloudfront.net/movies/Bird_Box/converted/Bird_Box_480p.mp4'
  }
};

function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const title = location.state?.movieTitle;
  const [quality, setQuality] = useState('1080p');

  useEffect(() => {
    if (videoRef.current && videoSources[title]) {
      videoRef.current.load();
      setTimeout(() => {
        videoRef.current.play().catch(err => console.warn("Autoplay failed:", err));
      }, 200);
    }
  }, [quality, title]);

  if (!title || !videoSources[title]) {
    return <div className="not-found">❌ Video not found for: {title}</div>;
  }

  return (
    <div className="netflix-player-container">
      <div className="video-header">
        <div className="left-header">
          <FaArrowLeft className="back-icon" onClick={() => navigate('/home')} />
          <h1 className="video-title">{title.replace(/_/g, ' ')}</h1>
        </div>
        <div className="quality-buttons">
          {['480p', '720p', '1080p'].map((res) => (
            <button
              key={res}
              onClick={() => setQuality(res)}
              className={`quality-btn ${quality === res ? 'active' : ''}`}
            >
              {res}
            </button>
          ))}
        </div>
      </div>

      <video
        ref={videoRef}
        className="netflix-video"
        controls
        poster="https://i.pinimg.com/736x/42/94/4d/42944dab47beda64e0f162367c1356f6.jpg"
      >
        <source src={videoSources[title][quality]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
