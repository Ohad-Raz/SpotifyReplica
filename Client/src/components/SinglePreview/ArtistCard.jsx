import React, { useState, useEffect } from 'react';
import styles from './ArtistCard.module.css';
import { apiUrl } from '../../config/apiConfig';
import { FaCirclePlay } from "react-icons/fa6";

const ArtistCard = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    const fetchArtists = async () => {
      try {
        const response = await fetch(`${apiUrl}artists`);
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
    <div className={styles.Container}>
      {artists.map((artist) => (
        <div key={artist._id} className={styles.artistCard}>
          <div className={styles.artistImageContainer}>
            <div>
         
            <img src={artist.imageUrl} alt={artist.name}  className={styles.artistImage} />
              <FaCirclePlay className={styles.playIcon} />
              </div>
          </div>
          <div className={styles.artistInfo}>
          <div className={styles.artistName}>{artist.name}</div>
          
          <div className={styles.type}>Artist</div></div>
     

        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
