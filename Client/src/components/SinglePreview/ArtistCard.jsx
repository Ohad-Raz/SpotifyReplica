import { useState, useEffect, useContext } from "react";
import styles from "./ArtistCard.module.css";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { AudioContext } from "../../context/AudioContext";
import { useNavigate } from "react-router-dom";

const ArtistCard = () => {
  const navigate = useNavigate();
  const { setCurrentPlaylist } = useContext(AudioContext);
  const [artists, setArtists] = useState([]);
  const setPlaylist = (playlist) => {
    setCurrentPlaylist(playlist.songs);
    navigate(`/listMusicArtist/${playlist._id}`);
  };

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(`${apiUrl}artists`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArtists(data.slice(0, 9));
      } catch (error) {
        console.error("Fetching artists failed: ", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className={styles.Container}>
      {artists.map((artist) => (
        <div
          key={artist._id}
          className={styles.artistCard}
          onClick={() => setPlaylist(artist)}
        >
          <div className={styles.artistImageContainer}>
            <div>
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className={styles.artistImage}
              />
              <FaCirclePlay className={styles.playIcon} />
            </div>
          </div>
          <div className={styles.artistInfo}>
            <div className={styles.artistName}>{artist.name}</div>

            <div className={styles.type}>Artist</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
