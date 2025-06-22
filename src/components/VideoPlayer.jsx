import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VideoPlayer.css';

function VideoPlayer() {
  const [quality, setQuality] = useState('1080p');
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const videoSources = {
    '1080p': 'https://d3qmd1yk9un8ot.cloudfront.net/converted/extraction/extraction_1080p.mp4',
    '720p': 'https://d3qmd1yk9un8ot.cloudfront.net/converted/extraction/extraction_720p.mp4',
    '480p': 'https://d3qmd1yk9un8ot.cloudfront.net/converted/extraction/extraction_480.mp4'
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setTimeout(() => {
        videoRef.current.play().catch((error) => {
          console.warn('Autoplay failed:', error);
        });
      }, 200);
    }
  }, [quality]);

  return (
    <div className="netflix-player-container">
      <div className="video-header">
        <div className="left-header">
          <FaArrowLeft className="back-icon" onClick={() => navigate('/home')} />
          <h1 className="video-title">Extraction</h1>
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
        <source src={videoSources[quality]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
