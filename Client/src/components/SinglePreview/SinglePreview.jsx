import React from 'react';
import ArtistCard from './ArtistCard'; 
import MediaCard from './MediaCard'; 
import styles from './SinglePreview.module.css';

const SinglePreview = ({ artists, mediaItems }) => {
  const safeArtists = artists || [];
  const safeMediaItems = mediaItems || [];

  return (
    <div className={styles.cardsContainer}>
      {safeArtists.map(artist => (
        <ArtistCard key={artist.id} imageUrl={artist.imageUrl} name={artist.name} />
      ))}
      {safeMediaItems.map(item => (
        <MediaCard key={item.id} imageUrl={item.imageUrl} title={item.title} year={item.year} type={item.type} />
      ))}
    </div>
  );
};

export default SinglePreview;
