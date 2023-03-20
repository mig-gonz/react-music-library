import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ArtistView() {
  const [albums, setAlbums] = useState([]);
  const [artistData, setArtistData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/album/${id}`)
      .then((response) => response.json())
      .then(({ results }) => {
        setArtistData(results.shift());
        setAlbums(results);
      });
  }, [id]);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{artistData.artistName}</h1>
      <h1>{artistData.primaryGenreName}</h1>
      <ul>
        {albums.map((album) => {
          return (
            <li key={album.collectionId}>
              <Link to={`/album/${album.collectionId}`}>
                {album.collectionName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArtistView;
