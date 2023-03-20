import React, { useState } from "react";

export function GalleryItem({ song }) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };

  const simpleView = (
    <div style={simpleStyle} onClick={handleClick}>
      <h3>{song.trackName}</h3>
      <h4>{song.collectionName}</h4>
    </div>
  );

  const detailView = (
    <div onClick={handleClick} style={detailStyle}>
      <h2>{song.trackName}</h2>
      <h3>{song.collectionName}</h3>
      <h4>{song.primaryGenreName}</h4>
    </div>
  );

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      {isExpanded ? detailView : simpleView}
    </div>
  );
}
export default GalleryItem;
