import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Tabs from '../../dashboard/Tabs/Tabs';
import Pagination from '../../dashboard/Pagination/Pagination';
import Container from '@mui/material/Container';
import filterByText from '../../../filters/filterByText';
import { useSelector } from "react-redux";
const Dashboard = () => {
    const coins = useSelector((state) => state.coins);
    const [count, setCount] = useState(2);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    
    const updatePaginatedCoins = (page) => {
      setPaginatedCoins([...coins].splice((page - 1) * 10, 10));
    }

    useEffect(()=>{
      if(count){
        setPaginatedCoins([...coins].splice(0, 10));
        setCount((c)=>{
          return c - 1;
        });
      }
    },[coins]);
    
      const searchBar = (text) =>{
        // console.log(text);
        let filteredCoins = filterByText(text, [...coins]);
        setPaginatedCoins([...filteredCoins].splice((1 - 1) * 10, 10));
      }
  return (
    <>
    <Header/>
    <Container maxWidth="lg">
    <Tabs coins = {paginatedCoins} searchBar = {searchBar}/>
    </Container>
    <Pagination updatePaginatedCoins={updatePaginatedCoins}/>
    </>
  )
}

export default Dashboard;