import React from 'react'
import TemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";
import "./Header.css"; 
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <Container maxWidth="lg" sx={{   position: "sticky",
      top: 0,zIndex: 100, backgroundColor: "var(--theme-bg-color-primary)"
      }}>
<div className="navbar">
        <Link to="/">
          <p className="link">CoinStats</p>
        </Link>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/coins">
        <p className="link">Coins</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/starred">
          <p className="link">Starred</p>
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
    </Container>
    
  );
}

export default Header;