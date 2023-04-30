import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Tabs from '../../dashboard/Tabs/Tabs';
import Pagination from '../../dashboard/Pagination/Pagination';
import Container from '@mui/material/Container';
import filterByText from '../../../filters/filterByText';
import { useSelector } from "react-redux";
import Footer from '../../common/Footer/Footer';
import scrollToTop from '../../../functions/scrollToTop';

const Dashboard = () => {
  const coins = useSelector((state) => state.coins);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(""); 

  document.title = `Coins | CoinStats`;

  useEffect(()=>{
    scrollToTop();
  },[]);

  const updatePaginatedCoins = () => {
    let arr = [...coins].splice((currentPage - 1) * 10, 10);
    setPaginatedCoins(arr);
    if (arr.length === 0 && currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    updatePaginatedCoins();
    setSearchText("");
  }, [currentPage]);

  useEffect(() => {
    if(searchText === "")  updatePaginatedCoins();
    else handleSearchBar({target:{value: searchText}});
  }, [coins]);

  const handleSearchBar = (e) => {
    let text = e.target.value;
    setSearchText(text);
    // console.log(text);
    if(text === "") updatePaginatedCoins();
    else{
      let filteredCoins = filterByText(text, [...coins]);
      setPaginatedCoins([...filteredCoins].splice(0, 8));
    }
  }
  const handlePageChange = (event, page) => {
    scrollToTop();
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Tabs coins={paginatedCoins} searchText={searchText} handleSearchBar={handleSearchBar} />
      </Container>
      <Pagination handlePageChange={handlePageChange} page={currentPage} />
      <Footer/>
    </>
  )
}

export default Dashboard;