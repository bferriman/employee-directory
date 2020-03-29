import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
import ClearFilterBtn from "../ClearFilterBtn";
import useDebounce from "../../utils/debounceHook";

function Search(props) {

  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (!search) {
      return;
    }
    if (debouncedSearchTerm) {
      props.searchByTerm(search);
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  // const filterButton = () => {
  //   if(props.filtered === true) {
  //     return <button className="btn btn-warning" onClick={props.clearFilter}>Clear Filter</button>
  //   }
  // }

  return (
    <div className="container">
      <h1 className="text-center">Search For Anything on Wikipedia</h1>
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        results={search}
      />
      <ClearFilterBtn clearFilter={props.clearFilter} filtered={props.filtered} />
    </div>
  );
}

export default Search;