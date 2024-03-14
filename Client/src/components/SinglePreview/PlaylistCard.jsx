import { useState, useEffect, useContext } from "react";
import styles from "./MediaCard.module.css";
import { AudioContext } from "../../context/AudioContext";

import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const PlaylistCard = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const { setCurrentPlaylist } = useContext(AudioContext);

  const setPlaylist = (playlist) =>   {
    setCurrentPlaylist(playlist.songs);
  navigate(`/listMusicPlaylist/${playlist._id}`); // Assuming '/listMusicplaylist/:id' is the route for displaying songs of an playlist
  }
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(`${apiUrl}playlists`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlaylists(data.slice(0, 9)); // Adjusted to match the expected API response structure
      } catch (error) {
        console.error("Fetching playlists failed:", error);
      }
    };

    fetchPlaylists();
  }, []);

  // console.log(playlists);
  return (
    <div className={styles.mediaContainer}>
      {playlists.map((playlist) => (
        <div
          key={playlist._id}
          className={styles.mediaCard}
          onClick={() => setPlaylist(playlist)}
        >
          <div className={styles.mediaImageContainer}>
            <img
              src={playlist.imageUrl}
              alt={playlist.title}
              className={styles.mediaImage}
            />
            <FaCirclePlay className={styles.playIcon} />
          </div>
          <div className={styles.mediaTitle}>{playlist.title}</div>
          <div className={styles.mediaReleaseDate}>
            {/* If you have a release date or created date for playlists, display it here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistCard;
