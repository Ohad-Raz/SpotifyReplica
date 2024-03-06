import styles from "./MiniPlaylist.module.css";
export default function MiniPlaylist({ playlist }) {
  // console.log(playlist);
  return (
    <div className={styles.playlist}>
      <div className={styles.playlistInfo}>
        <p>{playlist.title}</p>
        <span>{playlist.totalLength} Songs</span>
      </div>
      <img src={playlist.image} alt="Playlist cover" />
    </div>
  );
}
