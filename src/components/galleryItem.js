import React, { useState } from "react";

function GalleryItem({ song }) {
  let [isExpanded, setIsExpanded] = useState(false);

  const simpleStyle = {
    width: "25vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
  };

  const detailStyle = {
    width: "80vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
    backgroundImage: `url(${song.artworkUrl100})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "yellow",
  };

  const simpleView = () => {
    return (
      <div style={simpleStyle}>
        <h3>{song.trackName}</h3>
        <h4>{song.collectionName}</h4>
      </div>
    );
  };

  const detailView = () => {
    return (
      <div style={detailStyle}>
        <h2>{song.trackname}</h2>
        <h3>{song.collectionName}</h3>
        <h4>{song.primaryGenreName}</h4>
        <h4>{song.releaseDate}</h4>
      </div>
    );
  };
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      {isExpanded ? detailView() : simpleView()}
    </div>
  );
}
export default GalleryItem;
