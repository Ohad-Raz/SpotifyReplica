import styles from "./Sider.module.css";

import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaList } from "react-icons/fa6";

import MiniPlaylist from "../MiniPlaylist/MiniPlaylist";

import playlists from "../../dummy-data/playlist";
export default function Sider() {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideHeader}>
        <div className={styles.homeHeader}>
          <p>Home</p>
          <FaHome />
        </div>
        <div className={styles.searchHeader}>
          <p>Search</p>
          <FaSearch />
        </div>
      </div>
      <div className={styles.discover}>
        <div className={styles.searchHeader}>
          <div className={styles.actions}>
            <IoArrowBackSharp />
            <AiOutlinePlus />
          </div>
          <div className={styles.discoverHeader}>
            <p>Library</p>
            <BsCollection />
          </div>
        </div>
        <div className={styles.filter}>
          <MdCancel size={25} />
          <p className={styles.active}>PlayLists</p>
          <p>Spotify</p>
          <p>Recent</p>
        </div>
        <div className={styles.discoverSearch}>
          <div>
            <FaList />
            <p>Recent</p>
          </div>
          <FaSearch />
        </div>
        <div className={styles.playLists}>
          {playlists.map((playlist) => {
            return <MiniPlaylist key={playlist.id} playlist={playlist} />;
          })}
        </div>
      </div>
    </aside>
  );
}
