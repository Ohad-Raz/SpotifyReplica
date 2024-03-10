import React, { useState, useEffect } from 'react';
import styles from './MediaCard.module.css';

import { apiUrl } from '../../config/apiConfig';
import { FaCirclePlay } from "react-icons/fa6";

const PlaylistCard = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(`${apiUrl}playlists`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlaylists(data); // Adjusted to match the expected API response structure
      } catch (error) {
        console.error('Fetching playlists failed:', error);
      }
    };

    fetchPlaylists();
  }, []);


  return (
    <div className={styles.mediaContainer}>
      {playlists.map((playlist) => (
        <div key={playlist._id} className={styles.mediaCard}>
          <div className={styles.mediaImageContainer}>
            <img src={playlist.imageUrl} alt={playlist.title} className={styles.mediaImage} />
            <FaCirclePlay className={styles.playIcon} />
          </div>
          <div className={styles.mediaTitle}>{playlist.title}</div>
          <div className={styles.mediaReleaseDate}>
            {/* If you have a release date or created date for playlists, display it here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistCard;
