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
      props.setFilter(search);
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">Employee Directory</h1>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          search={search}
        />
        <ClearFilterBtn clearFilter={props.clearFilter} filtered={props.filtered} />
      </div>
    </div>
  );
}

export default Search;