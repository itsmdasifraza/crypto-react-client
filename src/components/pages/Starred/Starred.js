import React, { useState, useEffect } from 'react'
import Header from '../../common/Header/Header';
import Pagination from '../../dashboard/Pagination/Pagination';
import Container from '@mui/material/Container';
import filterByText from '../../../filters/filterByText';
import { useSelector } from "react-redux";
import Grid from '../../starred/Grid/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import Search from '../../dashboard/Search/Search';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import './Starred.css';
import Footer from '../../common/Footer/Footer';
import scrollToTop from '../../../functions/scrollToTop';

const Starred = () => {
  const coins = useSelector((state) => state.coins);
  const [starredCoins, setStarredCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedStarredCoins, setPaginatedStarredCoins] = useState([]);
  const [searchText, setSearchText] = useState("");

  document.title = `Starred | CoinStats`;

  useEffect(()=>{
    scrollToTop();
  },[]);

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
    if (searchText === "") updatePaginatedStarredCoins();
    else handleSearchBar({ target: { value: searchText } });
  }, [starredCoins]);

  const updatePaginatedStarredCoins = () => {
    let arr = [...starredCoins].splice((currentPage - 1) * 10, 10);
    setPaginatedStarredCoins(arr);
    if (arr.length === 0 && currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleSearchBar = (e) => {
    let text = e.target.value;
    setSearchText(text);
    // console.log(text);
    if (text === "") updatePaginatedStarredCoins();
    else {
      let filteredStarredCoins = filterByText(text, [...starredCoins]);
      setPaginatedStarredCoins([...filteredStarredCoins].splice((1 - 1) * 10, 10));
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
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={6} key={56}>
            <Search searchText={searchText} handleSearchBar={handleSearchBar} />
          </Grid2>
          <Grid2 xs={12} sm={6} key={76}>
            <div style={{paddingTop:"12px"}}></div>
            <Link to="/coins">
              <Button text={"Explore more coins"} onClick={()=>{}}  />
            </Link>
          </Grid2>
        </Grid2>
        <br/>
        <Grid2 container spacing={2}>
          {paginatedStarredCoins.map((coin, i) => {
              return(
                <Grid2 xs={12} sm={6} md={4} lg={3}  key={i}>
              <Grid coin={coin} key={i} />
                </Grid2>
              );            
            })}
          </Grid2>
      </Container>
      <Container maxWidth="lg">
        {starredCoins.length === 0 ? <div className="no-starred40"><p>Oops, you haven't starred any coin yet.</p></div>:<></> }
      </Container>
      <br/>
      <Pagination handlePageChange={handlePageChange} page={currentPage} />
      <Footer/>
    </>
  )
}

export default Starred;