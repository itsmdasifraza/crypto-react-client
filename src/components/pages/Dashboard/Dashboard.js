import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Tabs from '../../dashboard/Tabs/Tabs';
import {fetchCoins} from '../../../services/fetchCoins';

const Dashboard = () => {
    const [coins, setCoins] = useState([]);
    
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
    <Tabs/>
    </>
  )
}

export default Dashboard;