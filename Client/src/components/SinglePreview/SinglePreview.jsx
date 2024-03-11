import React from "react";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
import SongCard from "./SongCard";
import PlaylistCard from "./PlaylistCard";
import styles from "./SinglePreview.module.css";

const SinglePreview = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.Card}>
        <h2>Albums</h2>
        <div className={styles.mediaCard}>
          <AlbumCard />
        </div>
      </div>

      <div className={styles.Card}>
        <h2>Artists</h2>
        <div className={styles.mediaCard}>
          <ArtistCard />
        </div>
      </div>

      <div className={styles.Card}>
        <h2>Playlists</h2>

        <PlaylistCard className={styles.mediaCard} />
      </div>

      <div className={styles.Card}>
        <h2>Songs</h2>

        <SongCard className={styles.mediaCard} />
      </div>
    </div>
  );
};

export default SinglePreview;
