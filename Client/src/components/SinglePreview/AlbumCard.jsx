import { useState, useEffect, useContext } from "react";
import styles from "./MediaCard.module.css";
import { AudioContext } from "../../context/AudioContext";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";

const AlbumCard = () => {
  const navigate = useNavigate();
  const { setCurrentPlaylist } = useContext(AudioContext);
  const [albums, setAlbums] = useState([]);

  const setPlaylist = (album) => {
    setCurrentPlaylist(album.songs);
    navigate(`/listMusicAlbum/${album._id}`); // Assuming '/listMusicAlbum/:id' is the route for displaying songs of an album
  };

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
        console.error("Fetching albums failed: ", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {albums.map((album) => (
        
        <div
          key={album._id}
          className={styles.mediaCard}
          onClick={() => setPlaylist(album)}
        >
          <div className={styles.mediaImageContainer}>
            <img
              src={album.imageUrl}
              alt={album.title}
              className={styles.mediaImage}
            />
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
