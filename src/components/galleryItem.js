import React, { useState } from "react";
import { Link } from "react-router-dom";

function GalleryItem({ song }) {
  const {
    artistName,
    artistId,
    trackName,
    collectionName,
    primaryGenreName,
    releaseDate,
    collectionId,
    artworkUrl100,
  } = song;
  let [isExpanded, setIsExpanded] = useState(false);

  const simpleStyle = {
    width: "25vw",
    border: "1px solid black",
    margin: "2px",
  };

  const detailStyle = {
    width: "80vw",
    border: "1px solid black",
    margin: "2px",
    backgroundImage: `url(${artworkUrl100})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "yellow",
  };
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const simpleView = (
    <div style={simpleStyle}>
      <h3>{trackName}</h3>
      <h4>{artistName}</h4>
    </div>
  );

  const detailView = (
    <div style={detailStyle} onClick={handleClick}>
      <h2>{trackName}</h2>
      <h3>
        <Link to={`/artist/${artistId}`}>{artistName}</Link>
      </h3>
      <h3>
        <Link to={`/album/${collectionId}`}>{collectionName}</Link>
      </h3>
      <h4>{primaryGenreName}</h4>
      <h4>{releaseDate}</h4>
    </div>
  );

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      {isExpanded ? detailView : simpleView}
    </div>
  );
}
export default GalleryItem;
