import { useEffect, useState } from "react";
import ArtistCard from "../../components/SinglePreview/ArtistCard";
import SinglePreview from "../../components/SinglePreview/SinglePreview";
import SongCard from "../../components/SinglePreview/SongCard";
import styles from "./Home.module.css";
import axios from "axios";
import ArtistCardHome from "../../components/artistCardHome/ArtistCardHome";
import { apiUrl } from "../../config/apiConfig";
export default function Home() {
  const [artists, setArtist] = useState([]);

  const fetchArtist = async () => {
    const res = await axios.get(`${apiUrl}artists`);
    const data = await res.data;

    const handleClick = () => {
      console.log("hello");
    };
    setArtist(data);
  };
  useEffect(() => {
    fetchArtist();
  }, []);
  return (
    <div className={styles.container}>
      <div>
      </div>
      <h1>Good morning</h1>
      <div className="containerCards">
          {artists?.map((artist) => {
            return <ArtistCardHome artist={artist} />;
          })}
        </div>
      <div><SinglePreview/> </div>

    </div>
  );
}
