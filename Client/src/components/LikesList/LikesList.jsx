import React from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import imgLikes from "../../assets/likedsongs.png";
import "./style.css";

export default function LikesList() {
  return (
    <div>
      <div className="containerListArtist">
        <div className="headerListArtist">
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

          {/* {artistData?.songs?.map((song, index) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
}
