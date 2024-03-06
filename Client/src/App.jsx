import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchAlbums from "./pages/search/SearchAlbums";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import GenreCard from "./components/genre/GenreCard";
function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Router>
      <div className="aside">
        <Sider />
      </div>
      <main>
        <Routes>
          <Route path="/search" element={<SearchAlbums />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
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
