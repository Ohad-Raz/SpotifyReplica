import React, { useState, useEffect } from 'react';
import styles from './MediaCard.module.css';

import { apiUrl } from '../../config/apiConfig';
import { FaCirclePlay } from "react-icons/fa6";

const AlbumCard = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`${apiUrl}albums`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlbums(data.data.slice(0, 9)); // Assuming your API directly returns an array of albums
      } catch (error) {
        console.error('Fetching albums failed: ', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {albums.map((album) => (
        <div key={album._id} className={styles.mediaCard}>
          <div className={styles.mediaImageContainer}>
            <img src={album.imageUrl} alt={album.title} className={styles.mediaImage} />
            <FaCirclePlay className={styles.playIcon} />
          </div>
          <div className={styles.mediaTitle}>{album.title}</div>
          <div className={styles.mediaReleaseDate}>
            {new Date(album.release_date).getFullYear()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumCard;
