import { createContext, useState } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [currentAudio, setCurrentAudio] = useState("example");
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  return (
    <AudioContext.Provider
      value={{
        currentAudio,
        setCurrentAudio,
        currentPlaylist,
        setCurrentPlaylist,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
