import React from 'react'
import TemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css"; 
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <Container maxWidth="lg" sx={{   position: "sticky",
      top: 0,zIndex: 100
      }}>
<div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => {}}
            outlined = {false}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer/>
      </div>
    </div>
    </Container>
    
  );
}

export default Header;