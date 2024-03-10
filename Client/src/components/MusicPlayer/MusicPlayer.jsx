import styles from "./MusicPlayer.module.css";
import { useContext, useRef, useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import { CgMiniPlayer } from "react-icons/cg";
import { CiVolumeHigh } from "react-icons/ci";
import { MdOutlineSpeakerGroup } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { AudioContext } from "../../context/AudioContext";
export default function MusicPlayer() {
  const { currentAudio, currentPlaylist } = useContext(AudioContext);
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  function toggleAudio() {
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
      void audioRef.current?.play();
      setPlay(true);
    }
  }

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.audioSetting}>
        <FaExpandAlt />
        <CgMiniPlayer />
        <CiVolumeHigh />
        <input type="range" />
        <MdOutlineSpeakerGroup />
        <GiHamburgerMenu />
        <BsFillMusicPlayerFill />
      </div>
      <div className={styles.musicPlay}>
        <FaShuffle />
        <MdSkipNext size={40} />
        <button
          onClick={toggleAudio}
          type="button"
          className={styles.playToggle}
        >
          {!play ? <FaPlayCircle size={40} /> : <FaPauseCircle size={40} />}
        </button>
        {/* <FaPlayCircle size={40} /> */}
        <MdSkipPrevious size={40} />
        <MdOutlineReplay />
      </div>
      <div className={styles.currentSong}>
        <FaHeart />
        <div className={styles.songInfo}>
          <h2>SONG NAME</h2>
          <p>SONG ARTIST</p>
        </div>
        <img
          className={styles.albumCover}
          src="https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png"
          alt="Album Cover"
        />
      </div>
      <audio ref={audioRef} loop src={currentAudio} />
    </div>
  );
}
