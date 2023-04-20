import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Tabs from '../../dashboard/Tabs/Tabs';
import {fetchCoins} from '../../../services/fetchCoins';
import Pagination from '../../dashboard/Pagination/Pagination';
import Container from '@mui/material/Container';

const Dashboard = () => {
    const [coins, setCoins] = useState([]);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    
    const updatePaginatedCoins = (page) => {
      setPaginatedCoins([...coins].splice((page - 1) * 10, 10));
    }

    useEffect(()=>{
      setPaginatedCoins([...coins].splice(0, 10));
    },[coins]);

    useEffect(() => {
        const getCoins = async () => {
            const coin = await fetchCoins();
            if (coin) {
              setCoins(coin);
            }
          };
        getCoins();
      }, []);
    
      
  return (
    <>
    <Header/>
    <Container maxWidth="lg">
    <Tabs coins = {paginatedCoins}/>
    </Container>
    <Pagination updatePaginatedCoins={updatePaginatedCoins}/>
    </>
  )
}

export default Dashboard;