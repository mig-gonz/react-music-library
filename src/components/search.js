import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

function Search(props) {
  const [query, setQuery] = useState("");

  const { ref, fetchData } = useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(ref.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} ref={ref} />
      <input type="submit" />
    </form>
  );
}

export default Search;
