import React from 'react';
import SinglePreviewCard from './SinglePreviewCard';
import styles from'./SinglePreviewMethods.module.css'; // Again, remember to style this as well

function SinglePreviewMethods() {
  const previewCard = [
    { imageUrl: 'https://rb.gy/1bv5q3', name: 'bohemian rhapsody', title: 'another brick in the wall ' },
    { imageUrl: 'https://i.scdn.co/image/ab67616d00001e02056e90910cbaf5c5b892aeba', name: 'Queen', title: 'The Game' },
    
    

  ];

  return (
    <div className={styles.cardsContainer}>
         
      {previewCard.map((previewCard, index) => (
        <SinglePreviewCard
          key={index}
          imageUrl={previewCard.imageUrl}
          name={previewCard.name}
          title={previewCard.title}
        />
      ))}
    </div>
  );
}

export default SinglePreviewMethods;
