import React, { useEffect } from 'react'
import Header from '../../common/Header/Header';
import Main from '../../landing-page/Main/Main';
import Footer from '../../common/Footer/Footer';
import './Home.css';
import scrollToTop from '../../../functions/scrollToTop';
const Home = () => {
  
  useEffect(()=>{
    scrollToTop();
  },[]);

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default Home;