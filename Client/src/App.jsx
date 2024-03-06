import styles from "./App.module.css";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchAlbums from "./pages/search/SearchAlbums";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import { UserContext } from "./context/User.jsx";
import GenreCard from "./components/genre/GenreCard.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx"
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
  const [isOnAuth, setIsOnAuth] = useState(false);

  return (
    <Router>
      <div className= {isOnAuth ? styles.none : 'aside'}>
        <Sider/>
      </div>
      <main className={isOnAuth ? styles.authMain : ''}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAlbums />} />
          <Route path="/genre/:name" element={<GenreCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
              <NavLink to="/login" className={styles.login} onClick={() => setIsOnAuth(true)}>Log In</NavLink>
              <NavLink to="/register" className={styles.register} onClick={() => setIsOnAuth(true)}>Sign Up</NavLink>
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
      <div className= {isOnAuth ? styles.none : styles.musicPlayer}>
        <MusicPlayer/>
      </div>
    </Router>
  );
}

export default App;
