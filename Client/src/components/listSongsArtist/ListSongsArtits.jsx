import axios from "axios";
import { UserContext } from "../../context/User";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay, FaHeart, FaPause } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import { AudioContext } from "../../context/AudioContext";
import "./style.css";

export default function ListSongsArtits() {
  const { logedUser } = useContext(UserContext);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const { setCurrentPlaylist, setCurrentAudio } = useContext(AudioContext);

  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  const fetchArtistData = async () => {
    const res = await axios.get(`${apiUrl}artists/${id}`);
    const data = await res.data;
    setArtistData(data);
    setCurrentPlaylist(data.songs);
  };

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

  useEffect(() => {
    fetchArtistData();
  }, []);

  return (
    <div className="containerListArtist">
      <div className="headerListArtist">
        <img src={artistData?.imageUrl} alt="Artist" />
        <div>
          <span>{artistData?.name}</span>
          <p>{artistData?.biography}</p>
        </div>
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
          <div>Album</div>
          <div>Date added</div>
          <div></div>
        </div>

        {artistData?.songs?.map((song, index) => (
          <div className="playlist-item" key={`playlist-${index}`}>
            <div className="song-number">{index + 1}</div>
            <div className="song-details">
              <div className="song-cover">
                <img src={song.imageUrl} alt="Song Cover" />
              </div>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{artistData?.name}</div>
              </div>
            </div>
            <div className="song-album">{artistData?.albums[0]?.title}</div>
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
