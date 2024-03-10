import React, { useContext, useEffect, useState } from "react";

import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import imgLikes from "../../assets/likedsongs.png";
import "./style.css";
import { UserContext } from "../../context/User";
import axios from "axios";

export default function LikesList() {
  const { logedUser } = useContext(UserContext);
  const [likesSongs, setLikesSongs] = useState([]);

  const fetchSongsCurrentUser = async () => {
    const res = await axios.get(`${apiUrl}likes/${logedUser._id}`);
    const data = await res.data;

    const songs = data.data.map((like) => {
      return like.song_id;
    });
    console.log(songs);
    setLikesSongs(songs);
  };
  useEffect(() => {
    fetchSongsCurrentUser();
  }, []);
  return (
    <div>
      <div className="containerListArtist ">
        <div className="HeaderLikes headerListArtist">
          <img src={imgLikes} />
          <div>
            <span>Playlist</span>
            <h2>Liked Songs</h2>
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

        <div class="playlist-container">
          <div class="playlist-header">
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div>Date added</div>
            <div></div>
          </div>

          {likesSongs?.map((song, index) => {
            return (
              <div className="playlist-item">
                <div className="song-number">{index}</div>
                <div className="song-details">
                  <div className="song-cover">
                    <img src={song.imageUrl}></img>
                  </div>
                  <div className="song-info">
                    <div className="song-title">{song.title}</div>
                  </div>
                </div>
                <div className="song-album">{song.title}</div>
                <div className="song-added">3 weeks ago</div>
                <div className="play-icon">
                  <FaHeart className="heartLike" />▶
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
