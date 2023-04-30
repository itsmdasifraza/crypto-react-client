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
    
    const updatePaginatedStarredCoins = (page) => {
      setCurrentPage(page);
      let arr = [...starredCoins].splice((page - 1) * 10, 10)
      setPaginatedStarredCoins(arr);
      if(arr.length === 0){
        if(page - 1 >= 1) updatePaginatedStarredCoins(page - 1);
      }
    }

    useEffect(()=>{
      let data = coins.filter((elem)=>{
        if(elem.starred === true) return true;
        return false;
      });
      setStarredCoins(data);
    },[coins]);

    useEffect(()=>{
        updatePaginatedStarredCoins(currentPage);
    },[starredCoins]);
    
      const searchBar = (text) =>{
        // console.log(text);
        let filteredStarredCoins = filterByText(text, [...starredCoins]);
        setPaginatedStarredCoins([...filteredStarredCoins].splice((1 - 1) * 10, 10));
      }
  return (
    <>
    <Header/>
    <Container maxWidth="lg">
    <Tabs coins = {paginatedStarredCoins} searchBar = {searchBar}/>
    </Container>
    <Pagination updatePaginatedCoins={updatePaginatedStarredCoins} page= {currentPage}/>
    </>
  )
}

export default Starred;