import "./App.css";
import { useEffect, useState } from "react";
import Gallery from "./components/gallery";
import Search from "./components/search";

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
      <Search setSearch={setSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;
