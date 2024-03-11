import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardAlbum from "../cardalbum/CardAlbum";
import { apiUrl } from "../../config/apiConfig";
import "./style.css";
import SongCard from "../SongCard";

export default function GenreCard() {
  const [songsData, setSongsData] = useState([]);
  const [albumsFetch, setAlbumFecth] = useState([]);
  const { name, id } = useParams();

  console.log(name, id);
  const fetchAllOfGenre = async () => {
    const res = await axios.get(`${apiUrl}genres/${id}`);
    const data = await res.data;

    console.log(data.albums);
    setAlbumFecth(data.albums);
    setSongsData(data.songs);
  };

  useEffect(() => {
    fetchAllOfGenre();
  }, []);

  return (
    <div className="containerCardGenre">
      <div className="headerGenre">
        <div>
          <h1>{name}</h1>
        </div>
      </div>
      <h2>The state of {name} today albums</h2>
      <div className="mediaContainer">
        {albumsFetch.map((album) => {
          return (
            <Link
              to={`/genre/${id}/${name}/album/${album._id}`}
              key={album._id}
            >
              <CardAlbum album={album} />
            </Link>
          );
        })}
      </div>
      <h2>{name} New Releases</h2>
      <div className="containerSongs">
        {songsData.map((song) => {
          return <SongCard song={song} key={song._id} />;
        })}
      </div>
    </div>
  );
}
