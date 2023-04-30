import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Tabs from '../../dashboard/Tabs/Tabs';
import Pagination from '../../dashboard/Pagination/Pagination';
import Container from '@mui/material/Container';
import filterByText from '../../../filters/filterByText';
import { useSelector } from "react-redux";
import './Starred.css';
const Starred = () => {
  const coins = useSelector((state) => state.coins);
  const [starredCoins, setStarredCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedStarredCoins, setPaginatedStarredCoins] = useState([]);
  const [searchText, setSearchText] = useState(""); 

  useEffect(() => {
    updatePaginatedStarredCoins();
    setSearchText("");
  }, [currentPage]);

  useEffect(() => {
    let data = coins.filter((elem) => {
      if (elem.starred === true) return true;
      return false;
    });
    setStarredCoins(data);
  }, [coins]);

  useEffect(() => {
    if(searchText === "") updatePaginatedStarredCoins();
    else handleSearchBar({target:{value: searchText}});
  }, [starredCoins]);

  const updatePaginatedStarredCoins = () => {
    let arr = [...starredCoins].splice((currentPage - 1) * 10, 10);
    setPaginatedStarredCoins(arr);
    if (arr.length === 0 && currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleSearchBar  = (e) => {
    let text = e.target.value;
    setSearchText(text);
    // console.log(text);
    if(text === "") updatePaginatedStarredCoins();
    else{
      let filteredStarredCoins = filterByText(text, [...starredCoins]);
      setPaginatedStarredCoins([...filteredStarredCoins].splice((1 - 1) * 10, 10));
    }
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Tabs coins={paginatedStarredCoins} searchText={searchText} handleSearchBar={handleSearchBar} />
      </Container>
      <Pagination handlePageChange={handlePageChange} page={currentPage} />
    </>
  )
}

export default Starred;