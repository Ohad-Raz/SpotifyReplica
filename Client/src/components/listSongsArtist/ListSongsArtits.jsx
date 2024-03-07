import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/apiConfig";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

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
    <div className="containerListArtist">
      <div className="headerListArtist">
        <img src={artistData?.imageUrl} />
        <div>
          <span>{artistData?.name}</span>
          <p>{artistData?.biography}</p>
        </div>
      </div>
      <div className="containerIcons">
        <div className="threeIcons">
          <FaCirclePlay />
          <FaHeart />
          <SlOptions />
        </div>
        <CiCircleList />
      </div>

      <div className="headerTableHr">
        <div>{`${"#   "}   ${"   Title"}`}</div>
        <span>Album</span>
        <MdAccessTime />
      </div>
      <hr></hr>
      <ol>
        {artistData?.songs?.map((song) => {
          return <li>uriel</li>;
        })}
      </ol>
    </div>
  );
}
