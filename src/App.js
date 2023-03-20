import React, { useState, useRef } from "react";
import Search from "./components/search";
import Gallery from "./components/gallery";
import { DataContext } from "./context/dataContest";
import { SearchContext } from "./context/SearchContext";

function App() {
  let [message, setMessage] = useState("Search your favorite songs!");
  let [data, setData] = useState([]);
  // useRef(1) returns {current: 1}
  let inputRef = useRef();

  const fetchData = () => {
    document.title = inputRef.current.value;
    fetch(`https://itunes.apple.com/search?term=${inputRef.current.value}`)
      .then((response) => response.json())
      .then(({ resultCount, results }) => {
        const successMessage = `You fetched ${resultCount} result(s)!`;
        const errorMessage = "Nothing was fetched";
        setMessage(resultCount ? successMessage : errorMessage);
        setData(results);
      });
  };

  return (
    <div className="App">
      <SearchContext.Provider value={{ ref: inputRef, fetchData }}>
        <Search />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}
export default App;
