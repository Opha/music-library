import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  setIsPlaying,
  isPlaying,
  songs,
  setCurrentSong,
  audioRef,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              song={song}
              setCurrentSong={setCurrentSong}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
