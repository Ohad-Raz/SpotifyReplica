import React from "react";
import "./style.css";
import { FaCirclePlay } from "react-icons/fa6";

export default function ArtistCardHome({ artist }) {
  return (
    <div className="cardArtistHome">
      <img src={artist.imageUrl} alt="Artist" />
      <p>{artist.name}</p>
      <FaCirclePlay className="playIconArtist" />
    </div>
  );
}
