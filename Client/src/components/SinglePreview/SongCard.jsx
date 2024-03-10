import React, { useState, useEffect } from 'react';
import styles from './MediaCard.module.css';
import { apiUrl } from '../../config/apiConfig';
import { FaCirclePlay } from "react-icons/fa6";

const SongCard = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`${apiUrl}songs`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data.data.songs);
      } catch (error) {
        console.error('Fetching songs failed: ', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {songs.map((song) => (
        <div key={song._id} className={styles.mediaCard}>
          <div className={styles.mediaImageContainer}>
            <img src={song.imageUrl} alt={song.title} className={styles.mediaImage} />
            <FaCirclePlay className={styles.playIcon} />

          </div>
          <div className={styles.mediaTitle}>{song.title}</div>
          <div className={styles.mediaReleaseDate}>
            {new Date(song.release_date).getFullYear()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
