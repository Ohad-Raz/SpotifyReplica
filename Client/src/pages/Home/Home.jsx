import ArtistCard from "../../components/SinglePreview/ArtistCard";
import SongCard from "../../components/SinglePreview/SongCard";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Good morning</h1>
      <div>
        {<ArtistCard />}
      </div>
      <div>
        <SongCard />
      </div>
    </div>
  );
}
