import axios from "axios";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { UserContext } from "../../context/User";
import { useContext } from "react";
=======
import React, { useEffect, useState, useContext } from "react";
>>>>>>> b40939b776468582356e3a0a85d70ae7624811fc
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";

import { AudioContext } from "../../context/AudioContext";

import "./style.css";
export default function ListSongsArtits() {
<<<<<<< HEAD
  const { logedUser } = useContext(UserContext);
=======
  const { setCurrentPlaylist, setCurrentAudio } = useContext(AudioContext);

>>>>>>> b40939b776468582356e3a0a85d70ae7624811fc
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const setSong = (index) => {
    setCurrentAudio(artistData.songs[index]);
  };

  const fethcDataArtist = async () => {
    const res = await axios.get(`${apiUrl}artists/${id}`);
    const data = await res.data;
    setArtistData(data);
    setCurrentPlaylist(data.songs);
  };

<<<<<<< HEAD
  const handleClickLike = async (id) => {
    await axios.post(`${apiUrl}likes/${id}`, {
      type: "song",
      user_id: logedUser._id,
    });
  };
=======
>>>>>>> b40939b776468582356e3a0a85d70ae7624811fc
  useEffect(() => {
    fethcDataArtist();
  }, []);

  return (
    <div className="containerListArtist">
      <div className="headerListArtist">
        <img src={artistData?.imageUrl} />
        <div>
          <span>{artistData?.name}</span>
          <p>{artistData?.biography}</p>
        </div>
      </div>
      <div className="containerIcons">
        <div className="threeIcons">
          <FaCirclePlay />
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

        {artistData?.songs?.map((song, index) => {
          return (
            <div className="playlist-item" key={`playList${index}`}>
              <div className="song-number">{index + 1}</div>
              <div className="song-details">
                <div className="song-cover">
                  <img src={song.imageUrl}></img>
                </div>
                <div className="song-info">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{artistData?.name}</div>
                </div>
              </div>
              <div className="song-album">{artistData?.albums[0]?.title}</div>
              <div className="song-added">3 weeks ago</div>
<<<<<<< HEAD
              <div className="play-icon">
                <FaHeart
                  className="heartLike"
                  onClick={() => handleClickLike(song._id)}
                />
                ▶
=======
              <div className="play-icon" onClick={() => setSong(index)}>
                <FaHeart className="heartLike" />▶
>>>>>>> b40939b776468582356e3a0a85d70ae7624811fc
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
