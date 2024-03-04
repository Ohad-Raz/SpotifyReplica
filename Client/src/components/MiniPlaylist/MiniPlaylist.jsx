import styles from "./MiniPlaylist.module.css";
export default function MiniPlaylist({ playlist }) {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlistInfo}>
        <p>{playlist.name}</p>
        <span>{playlist.length} Songs</span>
      </div>
      <img src={playlist.image} alt="Playlist cover" />
    </div>
  );
}
