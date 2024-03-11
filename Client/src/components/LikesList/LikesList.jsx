import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { apiUrl } from "../../config/apiConfig";
import { FaPlay, FaHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import imgLikes from "../../assets/likedsongs.png";
import "./style.css";
import { UserContext } from "../../context/User";
import { AudioContext } from "../../context/AudioContext";

export default function LikesList() {
  const { setCurrentAudio } = useContext(AudioContext);
  const { logedUser } = useContext(UserContext);
  const [likesSongs, setLikesSongs] = useState([]);
  const [albumImg, setAlbumImg] = useState([]);

  // Handle playing a song
  const handleSongClick = (song) => {
    setCurrentAudio(song);
  };

  // Handle liking a song
  const handleClickLike = async (id) => {
    try {
      await axios.post(`${apiUrl}likes/${id}`, {
        type: "song",
        user_id: logedUser._id,
      });

      // Update the liked state of the song if necessary
      setLikesSongs((prevLikes) =>
        prevLikes.map((song) =>
          song._id === id ? { ...song, liked: true } : song
        )
      );
    } catch (error) {
      console.error("Error liking the song:", error);
    }
  };

  useEffect(() => {
    // Fetch liked songs of the current user
    const fetchSongsCurrentUser = async () => {
      try {
        const res = await axios.get(`${apiUrl}likes/${logedUser?._id}`);
        const data = await res.data;
        console.log(data.data);
        setLikesSongs(data.data);
        const imageALbumsSongs = data.data.map(async (song) => {
          const resAlbum = await axios.get(
            `${apiUrl}songs/${song.song_id._id}`
          );
          const dataAlbum = await resAlbum.data;
          return dataAlbum.imageUrl;
        });
        Promise.all(imageALbumsSongs).then((albumImages) => {
          setAlbumImg([...albumImg, albumImages]);
        });
      } catch (error) {
        console.error("Error fetching liked songs:", error);
      }
    };
    console.log(logedUser);
    fetchSongsCurrentUser();
  }, []);

  return (
    <div className="containerListArtist">
      <div className="HeaderLikes headerListArtist">
        <img src={imgLikes} alt="Liked Songs" />
        <div>
          <span>Playlist</span>
          <h2>Liked Songs</h2>
        </div>
      </div>
      <div className="containerIcons">
        <div className="threeIcons">
          <FaPlay />
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
        {likesSongs.map((song, index) => (
          <div className="playlist-item" key={index}>
            <div className="song-number">{index + 1}</div>
            <div className="song-details">
              <div className="song-cover">
                <img
                  src={albumImg?.[index] ? albumImg?.[index] : imgLikes}
                  alt="Song Cover"
                />
              </div>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
              </div>
            </div>
            <div className="song-album">{song.album}</div>
            <div className="song-added">3 weeks ago</div>
            <div className="play-icon">
              <FaHeart
                className="heartLike"
                onClick={() => handleClickLike(song._id)}
              />
              <span className="play-icon" onClick={() => handleSongClick(song)}>
                ▶
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
