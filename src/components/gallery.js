import React from "react";
//  import { createContext } from 'react

import GalleryItem from "./galleryItem";

function Gallery({ data }) {
  // use context hook
  //  const data = useContext(DataContext)
  const songs = data.filter((result) => result.kind === "song");

  return (
    <div>
      {songs.map((song) => (
        <GalleryItem song={song} key={song.trackId} />
      ))}
    </div>
  );
}

export default Gallery;
