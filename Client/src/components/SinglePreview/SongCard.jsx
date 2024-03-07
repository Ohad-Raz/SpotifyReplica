import React, { useState, useEffect } from 'react';
import styles from './SongCard.module.css';
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
    <div className={styles.songContainer}>
      {songs.map((song) => (
        <div key={song._id} className={styles.songCard}>
          <div className={styles.songImageContainer}>
            <img src={song.imageUrl} alt={song.title} className={styles.songImage} />
            <FaCirclePlay className={styles.playIcon} />

          </div>
          <div className={styles.songTitle}>{song.title}</div>
          <div className={styles.songReleaseDate}>
            {new Date(song.release_date).getFullYear()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
