import React from 'react';
import styles from './MediaCard.module.css'; 

const MediaCard = ({ imageUrl, title, year, type }) => {
  return (
    <div className={styles.mediaCard}>
      <div className={styles.mediaImageContainer}>
        <img src={imageUrl} alt={title} className={styles.mediaImage} />
      </div>
      <div className={styles.mediaInfo}>
        <div className={styles.mediaTitle}>{title}</div>
        <div className={styles.mediaYear}>{`${year} • ${type}`}</div>
      </div>
    </div>
  );
};

export default MediaCard;
