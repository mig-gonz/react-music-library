import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function AlbumView() {
  const [albumData, setAlbumData] = useState({});
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/song/${id}`)
      .then((response) => response.json())
      .then(({ results }) => {
        setAlbumData(results.shift());
        setSongs(results);
      });
  }, [id]);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{albumData.collectionName}</h1>
      <Link to={`/../artist/${albumData.artistId}`}>
        <h2>{albumData.artistName}</h2>
      </Link>
      <h1>{albumData.primaryGenreName}</h1>
      <ul>
        {songs.map((song) => {
          return <li key={song.collectionName}>{song.trackName}</li>;
        })}
      </ul>
    </div>
  );
}

export default AlbumView;
