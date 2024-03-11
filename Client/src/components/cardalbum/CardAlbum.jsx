import React from "react";

import { FaCirclePlay } from "react-icons/fa6";

export default function CardAlbum({ album }) {
  return (
    <div className="mediaCard">
      <div className="mediaImageContainer">
        <img src={album.imageUrl} alt={album.title} className="mediaImage" />
        <FaCirclePlay className="playIcon" />
      </div>
      <div className="mediaTitle">{album.title}</div>
      <div className="mediaReleaseDate">
        {new Date(album.release_date).getFullYear()}
      </div>
    </div>
  );
}
