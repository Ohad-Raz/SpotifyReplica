import React from "react";
import { Await, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";

export default function GenreCard() {
  const [songsData, setSongsData] = useState([]);
  const { name } = useParams();

  const fetchDataSongs = async () => {
    const res = await axios.get(`${apiUrl}songs/searchGenre/${name}`);
    const data = await res.data;

    setSongsData(data);
  };

  useEffect(() => {
    fetchDataSongs();
  }, []);
  return <div>GenreCard</div>;
}
