import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import "./style.css";
export default function ListSongsArtits() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const fethcDataArtist = async () => {
    const res = await axios.get(`${apiUrl}artists/${id}`);
    const data = await res.data;
    setArtistData(data);
    console.log(data);
  };
  useEffect(() => {
    fethcDataArtist();
  }, []);
  return (
    <div>
      <div className="headerListArtist">
        <img src={artistData?.imageUrl} />
        <div>
          <span>{artistData?.name}</span>
          <p>{artistData?.biography}</p>
        </div>
      </div>
    </div>
  );
}
