import styles from "./App.module.css";
import { useContext, useEffect } from "react";

import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import SearchAlbums from "./pages/search/SearchAlbums.jsx";
import { UserContext } from "./context/User.jsx";
import GenreCard from "./components/genre/GenreCard.jsx";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function About() {
  return <h1>About</h1>;
}

function App() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTgzNDdhOGFhY2RmOGI3MDk4MzE4OSIsImVtYWlsIjoiYWRtaW5Ac3BvdGlmeS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwOTcxNjYwMywiZXhwIjoxNzA5ODAzMDAzfQ.aBgvGqqoEI7v4KOrLJY8J8dxVsQXTFXV9l6mOyjppiw"
  );



  const { logedUser } = useContext(UserContext);
  return (
    <Router>
      <div className="aside">
        <Sider />
      </div>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAlbums />} />
          <Route path="/genre/:name" element={<GenreCard />} />
        </Routes>
        <header className={styles.header}>
          {logedUser ? (
            <>
              <div className={styles.userMenu}>
                <img
                  className={styles.userIcon}
                  src={logedUser.imageUrl}
                  alt=""
                />
                <IoIosNotificationsOutline size={20} />
                <div className={styles.installApp}>
                  <MdOutlineDownloadForOffline size={20} />
                  <p>Download the official app today</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.auth}>
                <p className={styles.login}>LOGIN</p>
                <p className={styles.register}>REGISTER</p>
              </div>
            </>
          )}
          <div className={styles.switch}>
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </header>
      </main>
      <div className={styles.musicPlayer}>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
