import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../functions/scrollToTop';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer56">
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 xs={12} sm={3} md={3} key={56}>
              <Link to="/">
                <h3 onClick={scrollToTop}>CoinStats</h3>
              </Link>
              <p>Analyze crypto coin stats in real time,</p>
            </Grid2>
            <Grid2 xs={12} sm={3} md={3} key={76}>
              <h4>Quick links</h4>
              <Link to="/">
                <p onClick={scrollToTop} className="link56">Home</p>
              </Link>
              <Link to="/coins">
                <p onClick={scrollToTop} className="link56">Coins</p>
              </Link>
              <Link to="/compare">
                <p onClick={scrollToTop} className="link56">Compare</p>
              </Link>
              <Link to="/starred">
                <p onClick={scrollToTop} className="link56">Starred</p>
              </Link>
            </Grid2>
            <Grid2 xs={12} sm={3} md={3} key={243}>
              <h4>Top coins</h4>
              <Link to="/coin/bitcoin">
                <p onClick={scrollToTop} className="link56">Bitcoin</p>
              </Link>
              <Link to="/coin/ethereum">
                <p onClick={scrollToTop} className="link56">Ethereum</p>
              </Link>
              <Link to="/coin/matic-network">
                <p onClick={scrollToTop} className="link56">Polygon</p>
              </Link>
            </Grid2>
            <Grid2 xs={12} sm={3} md={3} key={72}>
              <h4>Code base</h4>
              <Link to="https://github.com/itsmdasifraza/crypto-react-client">
                <p className="link56">Github</p>
              </Link>
            </Grid2>
          </Grid2>
        </Container>
      </div>
    </>
  )
}

export default Footer;