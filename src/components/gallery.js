import React from "react";
import GalleryItem from "./galleryItem";
import { useContext } from "react";
import { DataContext } from "../context/dataContest";

function Gallery() {
  const data = useContext(DataContext);
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
