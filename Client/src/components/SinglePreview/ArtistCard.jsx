import React from 'react';
import styles from './ArtistCard.module.css';

const ArtistCard = ({ imageUrl, name }) => {
  return (
    <div className={styles.artistCard}>
      <div className={styles.artistImageContainer}>
        <img src={imageUrl} alt={name} className={styles.artistImage} />
      </div>
      <div className={styles.artistName}>{name}</div>
    </div>
  );
};

export default ArtistCard;
