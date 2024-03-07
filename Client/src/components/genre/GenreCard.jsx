import React from "react";
import { Await, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";

export default function GenreCard() {
  const [dataFetch, setDataFetch] = useState([]);
  const { name } = useParams();

  const fetchDataSongs = async () => {
    const res = axios.get(`${apiUrl}songs/searchGenre/${name}`);
    const data = await res.data;
    console.log(data);
    setDataFetch(data);
  };

  useEffect(() => {
    fetchDataSongs();
  }, []);
  return <div>GenreCard</div>;
}
