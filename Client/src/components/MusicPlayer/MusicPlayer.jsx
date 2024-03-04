import styles from "./MusicPlayer.module.css";

import { FaExpandAlt } from "react-icons/fa";
import { CgMiniPlayer } from "react-icons/cg";
import { CiVolumeHigh } from "react-icons/ci";
import { MdOutlineSpeakerGroup } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMusicPlayerFill } from "react-icons/bs";

export default function MusicPlayer() {
  return (
    <div className={styles.container}>
      <div className={styles.audioSetting}>
        <FaExpandAlt />
        <CgMiniPlayer />
        <CiVolumeHigh />
        <input type="range" />
        <MdOutlineSpeakerGroup />
        <GiHamburgerMenu />
        <BsFillMusicPlayerFill />
      </div>
      <div className={styles.musicplayer}></div>
      <div className={styles.currentSong}></div>
    </div>
  );
}
