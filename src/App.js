import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Gallery from "./components/gallery";
import Search from "./components/search";
import AlbumView from "./components/albumView";
import ArtistView from "./components/artistView";
import { createResource as fetchData } from "./helper";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [search, setSearch] = useState("The Gorillaz");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  // useEffect(() => {
  //   fetch(`https://itunes.apple.com/search?term=${search}`)
  //     .then((response) => response.json())
  //     .then(({ resultCount, results }) => {
  //       const successMessage = `Successfully fetched ${resultCount} result(s)!`;
  //       const errorMessage = "Not found";
  //       setMessage(resultCount ? successMessage : errorMessage);
  //       setData(results);
  //     });
  // }, [search]);

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
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Gallery data={data} />
                </Suspense>
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
