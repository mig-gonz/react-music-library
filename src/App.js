import "./App.css";
// import { DataContext } from "../Context/dataContest";
import { useEffect, useState, useRef } from "react";
import { SearchContext } from "./Context/SearchContext";
import Gallery from "./components/gallery";
import Search from "./components/search";

function App() {
  // let [search, setSearch] = useState("The Gorillaz");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let inputRef = useRef("");

  const fetchData = (search) => {
    document.title = inputRef.current.value;
    fetch(`https://itunes.apple.com/search?term=${search}`)
      .then((response) => response.json())
      .then(({ resultCount, results }) => {
        const successMessage = `Successfully fetched ${resultCount} result(s)!`;
        const errorMessage = "Not found";
        setMessage(resultCount ? successMessage : errorMessage);
        setData(results);
      });
  };
  return (
    <div>
      <SearchContext.Provider value={{ ref: inputRef, fetchData }}>
        <Search />
      </SearchContext.Provider>
      {message}
      {/*  <DataContext.Provider value={data}> */}
      <Gallery data={data} />
      {/*  </DataContext.Provider> */}
    </div>
  );
}

export default App;
