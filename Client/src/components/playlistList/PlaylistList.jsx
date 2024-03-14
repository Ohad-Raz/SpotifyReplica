import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import "../albumLlist/style.css";
import { UserContext } from "../../context/User";
import { AudioContext } from "../../context/AudioContext";
import { FaCirclePlay, FaHeart, FaPause } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";

export default function PlaylistList() {
  const { id } = useParams();
  const [songs, setSong] = useState([]);
  const { logedUser } = useContext(UserContext);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const { setCurrentPlaylist, setCurrentAudio } = useContext(AudioContext);

  const fetchSongCurentPlaylist = async () => {
    const res = await axios.get(`${apiUrl}playlists/${id}`);
    const data = await res.data;

    setSong(data.songs);
    setCurrentPlaylist(data.songs);
  };

  useEffect(() => {
    fetchSongCurentPlaylist();
  }, []);
  const handleSongClick = (index) => {
    if (index === currentTrackIndex) {
      setCurrentAudio(null);
      setCurrentTrackIndex(null);
    } else {
      setCurrentAudio(artistData.songs[index]);
      setCurrentTrackIndex(index);
    }
  };

  const handleClickLike = async (id) => {
    await axios.post(`${apiUrl}likes/${id}`, {
      type: "song",
      user_id: logedUser._id,
    });
  };
  const handleRandomPlay = () => {
    if (artistData.songs.length === 0) return; // Ensure there are songs to play
    const randomIndex = Math.floor(Math.random() * artistData.songs.length);
    setCurrentAudio(artistData.songs[randomIndex]);
    setCurrentTrackIndex(randomIndex);
  };

  return (
    <div className="containerListArtist">
      <div className="headerListArtist">
        <img
          src={
            songs[0]?.imageUrl
              ? songs[0]?.imageUrl
              : "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
          }
          alt="Artist"
        />
        <div>{/* <span>{songs?.[0].name}</span> */}</div>
      </div>

      <div className="containerIcons">
        <div className="threeIcons">
          <FaCirclePlay onClick={handleRandomPlay} />
          <FaHeart />
          <SlOptions />
        </div>
        <CiCircleList />
      </div>

      <div className="playlist-container">
        <div className="playlist-header">
          <div>#</div>
          <div>Title</div>
          <div>Playlist</div>
          <div>Date added</div>
          <div></div>
        </div>

        {songs?.map((song, index) => (
          <div className="playlist-item" key={`playlist-${index}`}>
            <div className="song-number">{index + 1}</div>
            <div className="song-details">
              <div className="song-cover">
                <img
                  src={song.imageUrl ? song.imageUrl : ""}
                  alt="Song Cover"
                />
              </div>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{songs?.name}</div>
              </div>
            </div>
            {/* <div className="song-album">{artistData?.albums[0]?.title}</div> */}
            <div className="song-added">3 weeks ago</div>

            <div className="play-icon">
              <FaHeart
                className="heartLike"
                onClick={() => handleClickLike(song._id)}
              />
              <span
                className="play-icon"
                onClick={() => handleSongClick(index)}
              >
                {currentTrackIndex === index ? <FaPause /> : "▶"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
