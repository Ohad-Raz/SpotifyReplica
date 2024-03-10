import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";

import "./style.css";
export default function ListSongsArtits() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const fethcDataArtist = async () => {
    const res = await axios.get(`${apiUrl}artists/${id}`);
    const data = await res.data;
    setArtistData(data);
    console.log(data);
  };
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

      <div class="playlist-container">
        <div class="playlist-header">
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date added</div>
          <div></div>
        </div>

        {artistData?.songs?.map((song, index) => {
          return (
            <div className="playlist-item">
              <div className="song-number">{index}</div>
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
              <div className="play-icon">
                <FaHeart className="heartLike" />▶
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
