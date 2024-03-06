import styles from "./App.module.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
<<<<<<< HEAD
import SearchAlbums from "./pages/search/SearchAlbums.jsx";
import { UserContext } from "./context/User.jsx";
import GenreCard from "./components/genre/GenreCard.jsx";
=======
>>>>>>> 600291e854ba188e15edfedcf63e1fac8e868c2b
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
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <div className={styles.musicPlayer}>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
