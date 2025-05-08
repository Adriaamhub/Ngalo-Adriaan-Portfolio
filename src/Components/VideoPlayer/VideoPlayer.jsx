import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Check out this video!',
          text: 'Watch this awesome video.',
          url: window.location.href, // or custom video link
        });
      } else {
        alert('Share API not supported in this browser.');
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} controls width="100%">
        <source src="src/assets/video/Summer Stock Footage Reel- 4K, HD, Royalty-free.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="video-buttons">
        <button onClick={handleFullscreen}>Fullscreen</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
