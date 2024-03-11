import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardAlbum from "../cardalbum/CardAlbum";
import { apiUrl } from "../../config/apiConfig";
import "./style.css";

export default function GenreCard() {
  const [songsData, setSongsData] = useState([]);
  const [albumsFetch, setAlbumFecth] = useState([]);
  const { name, id } = useParams();

  console.log(name, id);
  const fetchAllOfGenre = async () => {
    const res = await axios.get(`${apiUrl}genres/${id}`);
    const data = await res.data;

    setAlbumFecth(data.albums);
    setSongsData(data.songs);
  };

  useEffect(() => {
    fetchAllOfGenre();
  }, []);

  return (
    <div>
      <div className="heaadeGenre">
        <h1>{name}</h1>
      </div>
      <h2>The state of {name} today albums</h2>
      <div className="mediaContainer">
        {albumsFetch.map((album) => {
          return <CardAlbum album={album} key={album._id} />;
        })}
      </div>
    </div>
  );
}
