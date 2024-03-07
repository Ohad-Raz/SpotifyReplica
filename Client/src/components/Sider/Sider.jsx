import { useState, useEffect, useContext } from "react";
import styles from "./Sider.module.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa"; // Import the search icon
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaList } from "react-icons/fa";
import axios from "axios";
import MiniPlaylist from "../MiniPlaylist/MiniPlaylist";
import { apiUrl } from "../../config/apiConfig";

import { UserContext } from "../../context/User.jsx";

import dummyPlaylists from "../../dummy-data/playlist";

export default function Sider() {
  const { logedUser } = useContext(UserContext);
  // logedUser && console.log(logedUser);

  const [playlists, setPlaylists] = useState(dummyPlaylists);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInput = () => {
    setShowInput(!showInput);
    if (!showInput) {
      setInputValue(""); // Reset input value when showing the input field
    }
  };

  const fetchPlaylists = () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    // console.log(logedUser);
    axios
      .get(`${apiUrl}playlists/users/${logedUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (logedUser) {
      fetchPlaylists();
    }
  }, [logedUser]);

  const handleInputChange = async (event) => {
    setInputValue(event.target.value);
  };

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);

  const handleSearch = () => {
    console.log("Search input:", inputValue);
    // Perform search-related operations here
  };

  const filteredPlaylists = playlists.filter((playlist) => {
    return playlist.title.toLowerCase().includes(inputValue.toLowerCase());
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
          {filteredPlaylists.map((playlist, index) => {
            return <MiniPlaylist key={index} playlist={playlist} />;
          })}
        </div>
      </div>
    </aside>
  );
}
