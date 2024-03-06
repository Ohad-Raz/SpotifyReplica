import styles from "./App.module.css";
import { useContext, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import SearchAlbums from "./pages/search/SearchAlbums.jsx";
import { UserContext } from "./context/User.jsx";
import SinglePreviewMethods from "./components/SinglePreview/SinglePreviewMethods";
import SinglePreviewCard from "./components/SinglePreview/SinglePreviewCard";
import GenreCard from "./components/genre/GenreCard.jsx";
function About() {
  return <h1>About</h1>;
}

function App() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTVjZjgzNzdkOWRlNDA3Y2MyNDljMyIsImVtYWlsIjoib2hhZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDk3MjMyMzUsImV4cCI6MTcwOTgwOTYzNX0.AV1CxONuOxkNIESKROqwEITc-8zitVbZL4pq1Ue5bJ8"
  );

  const { logedUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(logedUser);
  // }, [logedUser]);

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
      </main>
      <div className={styles.musicPlayer}>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
