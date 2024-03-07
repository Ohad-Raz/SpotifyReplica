import React, { useState, useEffect } from 'react';
import styles from './ArtistCard.module.css';
import { apiUrl } from '../../config/apiConfig';

const ArtistCard = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    const fetchArtists = async () => {
      try {
        const response = await fetch(`${apiUrl}api/v1/artists`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Fetching artists failed: ', error);
      }
    };

    fetchArtists();
  }, []);

  // If you want to display all artists, map through the state variable
  return (
    <div>
      {artists.map((artist) => (
        <div key={artist._id} className={styles.artistCard}>
          <div className={styles.artistImageContainer}>
            <img src={artist.imageUrl} alt={artist.name} className={styles.artistImage} />
          </div>
          <div className={styles.artistName}>{artist.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
