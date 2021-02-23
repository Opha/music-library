import React, { useState, useRef } from "react";
import "./styles/app.scss";
import data from "./data";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";
import Nav from "./components/Nav";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHandler = (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    //percentage calculation
    let roundedCurrent = Math.round(currentTime);
    let roundedDuration = Math.round(duration);
    let percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: percentage,
    });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
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
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
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
