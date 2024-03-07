import React from "react";
import { Await, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";

export default function GenreCard() {
  const [songsData, setSongsData] = useState([]);
  const [albumsFetch, setAlbumFecth] = useState([]);
  const { name } = useParams();

  const fetchDataSongs = async () => {
    const res = await axios.get(`${apiUrl}songs/searchGenre/${name}`);
    const data = await res.data;
    console.log(data);
    setSongsData(data);
  };
  const fetchAlbums = async () => {
    const res = await axios.get(`${apiUrl}albums/?genre=${name}`);
    const data = await res.data;
    setAlbumFecth(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchDataSongs();
    fetchAlbums();
  }, []);
  return (
    <div className="containerGenreCard">
      <h1>{albumsFetch[0]?.genre.name}</h1>
      <h2>Discover new music </h2>

      <div>
        {albumsFetch[0]
          ? albumsFetch.map((album) => {
              return <p>uriel</p>;
            })
          : ""}
      </div>
    </div>
  );
}
