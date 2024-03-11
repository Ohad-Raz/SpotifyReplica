import { useEffect, useState } from "react";
import ArtistCard from "../../components/SinglePreview/ArtistCard";
import SinglePreview from "../../components/SinglePreview/SinglePreview";
import SongCard from "../../components/SinglePreview/SongCard";
import styles from "./Home.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ArtistCardHome from "../../components/artistCardHome/ArtistCardHome";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import imgLike from "../../assets/likedsongs.png";

export default function Home() {
  const [artists, setArtist] = useState([]);

  const fetchArtist = async () => {
    const res = await axios.get(`${apiUrl}artists`);
    const data = await res.data;

    setArtist(data);
  };
  useEffect(() => {
    fetchArtist();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <div className="containerArtistFields">
          <h1>Good morning</h1>
          <div className="containerCards">
            <NavLink
              to="/likes"
              className="likesContainer"
              key={Math.random() * 10}
            >
              <div className="cardArtistHome">
                <img src={imgLike} alt="Favorites" />
                <p>Liked Songs</p>
                <FaCirclePlay className="playIconArtist" />
              </div>
            </NavLink>
            {artists?.map((artist) => {
              return (
                <NavLink to={`listMusicArtist/${artist._id}`} key={artist.id}>
                  <ArtistCardHome artist={artist} />
                </NavLink>
              );
            })}
          </div>
          {/* <div></div> */}
          <SinglePreview />
        </div>
      </div>
    </div>
  );
}
