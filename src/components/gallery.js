import React from "react";
import GalleryItem from "./galleryItem";

function Gallery({ data }) {
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
