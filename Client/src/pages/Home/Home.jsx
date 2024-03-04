import styles from "./Home.module.css";

import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>main Contaienr</h1>
        <div className={styles.mainHeader}></div>
        <div className={styles.playlistContainer}></div>
      </main>
      <menu>
        <h1>home menu</h1>
      </menu>
      <aside>
        <h1>nav menu</h1>
        <div className={styles.asideHeader}></div>
        <div className={styles.searchFilter}></div>
        <div className={styles.recent}></div>
        <div className={styles.lastResult}></div>
      </aside>
      <div className={styles.musicPlayer}>
        <MusicPlayer />
      </div>
    </div>
  );
}
