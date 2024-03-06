import styles from "./App.module.css";
import { useContext } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sider from "./components/Sider/Sider";
import { UserContext } from "./context/User.jsx";
import SinglePreviewMethods from "./components/SinglePreview/SinglePreviewMethods";
import SinglePreviewCard from "./components/SinglePreview/SinglePreviewCard";
function About() {
  return <h1>About</h1>;
}

function App() {
  const logedUser = useContext(UserContext);
  console.log(logedUser);
  console.log("urillll");
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
      {/* <SinglePreviewMethods/> */}
      </div>
    </Router>
  );
}

export default App;
