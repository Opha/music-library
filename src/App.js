import React, { useState, useRef } from "react";
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
  const audioRef = useRef(null);
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        timeUpdateHandler={timeUpdateHandler}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
