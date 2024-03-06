import React, { useState, useEffect } from "react";
import styles from "./Sider.module.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa"; // Import the search icon
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaList } from "react-icons/fa";

import MiniPlaylist from "../MiniPlaylist/MiniPlaylist";

import playlists from "../../dummy-data/playlist";

export default function Sider() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInput = () => {
    setShowInput(!showInput);
    if (!showInput) {
      setInputValue(""); // Reset input value when showing the input field
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleSearch = () => {
    console.log("Search input:", inputValue);
    // Perform search-related operations here
  };

  // Filter playlists based on input value
  const filteredPlaylists = playlists.filter((playlist) => {
    return playlist.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <aside className={styles.aside}>
      <div className={styles.asideHeader}>
        <div className={styles.homeHeader}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <FaHome />
        </div>
        <div className={styles.searchHeader}>
          <Link to="/search">
            {" "}
            <p>Search</p>
          </Link>
          <FaSearch onClick={toggleInput} />
        </div>
      </div>
      <div className={styles.discover}>
        <div className={styles.searchHeader}>
          <div className={styles.actions}>
            <IoArrowBackSharp />
            <AiOutlinePlus />
          </div>
          <div className={styles.discoverHeader}>
            <p>Library</p>
            <BsCollection />
          </div>
        </div>
        <div className={styles.filter}>
          <MdCancel size={25} />
          <p className={styles.active}>PlayLists</p>
          <p>Spotify</p>
          <p>Recent</p>
        </div>

        <div className={styles.discoverSearch}>
          <div>
            <FaList />
            <p>Recent</p>
          </div>
          <div
            className={`${styles.searchPlaylist} ${
              showInput && styles.activeSearch
            }`}
          >
            {showInput && (
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Enter your search"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button onClick={handleSearch} />
              </div>
            )}
            <FaSearch onClick={toggleInput} />{" "}
          </div>
        </div>
        <div className={styles.playLists}>
          {filteredPlaylists.map((playlist) => {
            return <MiniPlaylist key={playlist.id} playlist={playlist} />;
          })}
        </div>
      </div>
    </aside>
  );
}
