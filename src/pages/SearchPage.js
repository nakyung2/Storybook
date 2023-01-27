import React from "react";
import SearchList from '../components/search/SearchList'
import SearchInput from "../components/search/SearchInput"

const Search = (props) => {
  return (
    <>
      <SearchInput></SearchInput>
      <SearchList></SearchList>
    </>
  )
}

export default Search