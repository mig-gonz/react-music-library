import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

function Search(props) {
  const [query, setQuery] = useState("");
  const { ref, fetchData } = useContext(SearchContext);

  // const handleChange = () => {
  //   setQuery(ref.current.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={ref} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
