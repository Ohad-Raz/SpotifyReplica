import { useState, useEffect, useContext } from "react";
import styles from "./MediaCard.module.css";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { AudioContext } from "../../context/AudioContext";

const SongCard = () => {
  const { setCurrentPlaylist, setCurrentAudio } = useContext(AudioContext);
  const [songs, setSongs] = useState([]);

  const setSong = (song) => {
    setCurrentAudio(song);
    setCurrentPlaylist(songs);
  };
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`${apiUrl}songs`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data.data.songs.slice(0, 9));
      } catch (error) {
        console.error("Fetching songs failed: ", error);
      }
    };

    fetchSongs();
  }, []);

  // console.log(songs[2]);
  return (
    <div className={styles.mediaContainer}>
      {songs.map((song) => (
        <div key={song._id} className={styles.mediaCard}>
          <div
            className={styles.mediaImageContainer}
            onClick={() => setSong(song)}
          >
            <img
              src={song.imageUrl}
              alt={song.title}
              className={styles.mediaImage}
            />
            <FaCirclePlay className={styles.playIcon} />
          </div>
          <div className={styles.mediaTitle}>{song.title}</div>
          <div className={styles.mediaReleaseDate}>
            {new Date(song.release_date).getFullYear()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
