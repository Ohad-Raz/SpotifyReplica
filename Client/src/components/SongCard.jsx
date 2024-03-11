import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function SongCard({ song }) {
  return (
    <div className="mediaCard">
      <div className="mediaImageContainer">
        <img src={song?.imageUrl} alt={song?.title} className="mediaImage" />
        <FaCirclePlay className="playIcon" />
      </div>
      <div className="mediaTitle">{song?.title}</div>
      <div className="mediaReleaseDate">
        {new Date(song.release_date).getFullYear()}
      </div>
    </div>
  );
}
