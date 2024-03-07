import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import styles from './MediaCard.module.css';
import { apiUrl } from '../../config/apiConfig';

const MediaContainer = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch songs
        const songsResponse = await fetch(`${apiUrl}api/v1/songs`);
        const songsData = await songsResponse.json();
        setSongs(songsData);

        // Fetch albums
        const albumsResponse = await fetch(`${apiUrl}api/v1/albums`);
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);

        // Fetch playlists
        const playlistsResponse = await fetch(`${apiUrl}api/v1/playlists`);
        const playlistsData = await playlistsResponse.json();
        setPlaylists(playlistsData);

      } catch (error) {
        console.error('Fetching media failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {songs.map((song) => (
        <MediaCard
          key={song._id}
          imageUrl={song.imageUrl}
          title={song.title}
          year={new Date(song.release_date).getFullYear()}
          type="Song"
        />
      ))}
      {albums.map((album) => (
        <MediaCard
          key={album._id}
          imageUrl={album.coverUrl}
          title={album.title}
          year={new Date(album.release_date).getFullYear()}
          type="Album"
        />
      ))}
      {playlists.map((playlist) => (
        <MediaCard
          key={playlist._id}
          imageUrl={playlist.imageUrl}
          title={playlist.title}
          year={new Date(playlist.release_date).getFullYear()}
          type="Playlist"
        />
      ))}
    </div>
  );
};

export default MediaContainer;
