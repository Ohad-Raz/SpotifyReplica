import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/User";
import AudioProvider from "./context/AudioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AudioProvider>
      <App />
    </AudioProvider>
  </UserProvider>
);
