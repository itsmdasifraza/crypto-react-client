import React, { useEffect, useState } from 'react'
import './Search.css';
const Search = ({searchText, handleSearchBar}) => {
    return (
    <input className="inp90" type="text"  onChange={handleSearchBar} value={searchText} placeholder="Search coins" />
  )
}

export default Search;