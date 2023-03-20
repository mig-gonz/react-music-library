import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery";
import Search from "./components/search";
import AlbumView from "./components/albumView";
import ArtistView from "./components/artistView";

function App() {
  let [search, setSearch] = useState("The Gorillaz");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}`)
      .then((response) => response.json())
      .then(({ resultCount, results }) => {
        const successMessage = `Successfully fetched ${resultCount} result(s)!`;
        const errorMessage = "Not found";
        setMessage(resultCount ? successMessage : errorMessage);
        setData(results);
      });
  }, [search]);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Search setSearch={setSearch} />
                {message}
                <Gallery data={data} />
              </div>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
