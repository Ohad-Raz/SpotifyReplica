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
import AlbumList from "./components/albumLlist/AlbumList.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ListSongsArtits from "./components/listSongsArtist/ListSongsArtits.jsx";
import BottomSignup from "./components/MiniComponents/BottomSignup/BottomSignup.jsx";
import LikesList from "./components/LikesList/LikesList.jsx";
import PlaylistList from "./components/playlistList/PlaylistList";

function App() {
  const { logedUser } = useContext(UserContext);
  const [isOnAuth, setIsOnAuth] = useState(false);

  // console.log(logedUser);

  // useEffect(() => {
  //   console.log(logedUser ? logedUser : "No user logged in");
  // }, [logedUser]);

  return (
    <Router>
      <div className={isOnAuth ? styles.none : "aside"}>
        <Sider />
      </div>
      <main className={isOnAuth ? styles.authMain : ""}>
        {!isOnAuth ? (
          <NavBar setIsOnAuth={setIsOnAuth} logedUser={logedUser} />
        ) : null}
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAlbums />} />
          <Route path="/genre/:id/:name" element={<GenreCard />} />
          <Route path="/listMusicAlbum/:id" element={<AlbumList />} />
          <Route path="/listMusicPlaylist/:id" element={<PlaylistList />} />

          <Route path="/genre/:id/:name/album/:id" element={<AlbumList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/likes" element={<LikesList />} />
          <Route path="/listMusicArtist/:id" element={<ListSongsArtits />} />

          {!logedUser && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </main>

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
