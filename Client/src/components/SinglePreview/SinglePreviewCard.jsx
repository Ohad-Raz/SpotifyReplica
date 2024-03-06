import React from 'react';
import styles from './SinglePreviewCard.module.css';

function SinglePreviewCard({ imageUrl, name, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardSubtitle}>{title}</p>
      </div>
    </div>
  );
}

export default SinglePreviewCard;
