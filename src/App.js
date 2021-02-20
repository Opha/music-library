import React, { useState } from "react";
import "./styles/app.scss";
import data from "./util";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
