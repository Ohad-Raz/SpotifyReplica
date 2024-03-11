import styles from "./MusicPlayer.module.css";
import { useContext, useEffect, useRef, useState } from "react";
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
  const [volume, setVolume] = useState(0.5); // Initial volume set to 0.5
  const [audioHistory, setAudioHistory] = useState([]);
  const { currentAudio, currentPlaylist, setCurrentAudio } =
    useContext(AudioContext);
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  function toggleAudio() {
    console.log(currentAudio.audioUrl);
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
      audioRef.current?.play();
      setPlay(true);
    }
  }

  const nextTrack = () => {
    const playlistLength = currentPlaylist.length;
    let randomIndex = Math.floor(Math.random() * playlistLength);
    while (randomIndex === currentAudio.index) {
      randomIndex = Math.floor(Math.random() * playlistLength);
    }
    setAudioHistory((prevData) => [...prevData, currentAudio]);
    const newTrack = currentPlaylist[randomIndex];
    setCurrentAudio(newTrack);
  };

  const prevTrack = () => {
    console.log(audioHistory.length);
    if (audioHistory.length === 0) {
      audioRef.current?.pause();
      return;
    } else {
      setCurrentAudio(audioHistory[audioHistory.length - 1]);
      setAudioHistory((prevData) => prevData.slice(0, -1));
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    // console.log(currentAudio);
    audioRef.current?.play();
    setPlay(true);
  }, [currentAudio]);

  useEffect(() => {
    if (currentPlaylist?.length > 0) {
      // console.log("test");
      setCurrentAudio(currentPlaylist[0]);
    }
  }, [currentPlaylist]);

  // useEffect(() => {
  //   console.log(audioHistory);
  // }, [audioHistory]);
  // console.log(currentPlaylist);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.audioSetting}>
        <FaExpandAlt />
        <CgMiniPlayer />
        <CiVolumeHigh />
        <input
          type="range"
          min="0.0"
          max="1.0"
          step="0.01" // Optional: Define step size for smoother volume adjustments
          value={volume}
          onChange={handleVolumeChange} // Call the event handler on volume change
        />
        <MdOutlineSpeakerGroup />
        <GiHamburgerMenu />
        <BsFillMusicPlayerFill />
      </div>
      <div className={styles.musicPlay}>
        <FaShuffle />
        <button onClick={prevTrack} className={styles.playToggle}>
          <MdSkipPrevious size={40} />
        </button>
        <button
          onClick={toggleAudio}
          type="button"
          className={styles.playToggle}
        >
          {!play ? <FaPlayCircle size={40} /> : <FaPauseCircle size={40} />}
        </button>
        {/* <FaPlayCircle size={40} /> */}
        <button onClick={nextTrack} className={styles.playToggle}>
          <MdSkipNext size={40} />
        </button>
        <MdOutlineReplay />
      </div>
      <div className={styles.currentSong}>
        <FaHeart />
        <div className={styles.songInfo}>
          <h2>{currentAudio?.title}</h2>
          <p>{currentAudio?.artist}</p>
        </div>
        <img
          className={styles.albumCover}
          src={currentAudio?.imageUrl}
          alt="Album Cover"
        />
      </div>
      <audio ref={audioRef} loop src={currentAudio?.audioUrl} />
    </div>
  );
}
