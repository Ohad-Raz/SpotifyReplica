import styles from "./App.module.css";

import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchAlbums from "./pages/search/SearchAlbums";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import { UserContext } from "./context/User.jsx";
import GenreCard from "./components/genre/GenreCard.jsx";
import Register from "./components/Register/Register.jsx";

import Login from "./components/Login/Login.jsx";

import NavBar from "./components/navbar/NavBar.jsx";

import BottomSignup from "./components/MiniComponents/BottomSignup/BottomSignup.jsx";

function About() {
  return <h1> </h1>;
}

function App() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTgzNDdhOGFhY2RmOGI3MDk4MzE4OSIsImVtYWlsIjoiYWRtaW5Ac3BvdGlmeS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwOTcxNjYwMywiZXhwIjoxNzA5ODAzMDAzfQ.aBgvGqqoEI7v4KOrLJY8J8dxVsQXTFXV9l6mOyjppiw"
  );

  const { logedUser } = useContext(UserContext);
  const [isOnAuth, setIsOnAuth] = useState(false);
 console.log(logedUser);
  return (
    <Router>
      <div className={isOnAuth ? styles.none : "aside"}>
        <Sider />
      </div>
      <main className={isOnAuth ? styles.authMain : ""}>
        <NavBar setIsOnAuth={setIsOnAuth} logedUser={logedUser} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAlbums />} />
          <Route path="/genre/:name" element={<GenreCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <div className={isOnAuth ? styles.none : styles.musicPlayer} />
      <MusicPlayer />

      <div className={isOnAuth ? styles.none : styles.musicPlayer}>
        {!logedUser ? (
          <BottomSignup setIsOnAuth={setIsOnAuth} />
        ) : (
    
          <MusicPlayer />
        )}
      </div>
    </Router>
  );
}

export default App;
