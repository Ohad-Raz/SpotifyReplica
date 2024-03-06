import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SearchAlbums() {
  return (
    <div className="containerSearch">
      <h1>Browse all</h1>
      <div>
        <Link className="musicCard" to="/genre/Music">
          Music
        </Link>
      </div>
    </div>
  );
}
