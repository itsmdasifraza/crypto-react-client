import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchCoins } from '../../../services/fetchCoins';
import Grid2 from '@mui/material/Unstable_Grid2';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import './CompareSelect.css';
const CompareSelect = ({ coinOne, coinTwo, handleCoinOneChange, handleCoinTwoChange }) => {

  const [coins, setCoins] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCoins = async () => {
      const coin = await fetchCoins();
      if (coin) {
        setCoins(coin);
        setIsLoading(false);
      }
    };
    getCoins();
  }, []);

  let style = {
    width:"100%",
    height: "2.5rem",
    color: "var(--theme-color-secondary)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--theme-color-secondary)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--theme-color-secondary)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--theme-color-secondary)",
      },
    },
  }
  return (
    <>
      {isLoading ? <></> : <>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={3}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }} >Select first Coin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coinOne}
              label="coinOne"
              onChange={handleCoinOneChange}

              sx={style}
            >
              {coins.map((elem) => {
                return (<MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>);
              })}
            </Select>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <div className="compare-sign-02"  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <div>
              <br/>
              <CompareArrowsIcon sx={{ fontSize: 40, color:"var(--theme-color-primary)" }} />
              </div>
            </div>
          </Grid2>
          <Grid2 xs={12} sm={3}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }} >Select second Coin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coinTwo}
              label="coinTwo"
              onChange={handleCoinTwoChange}

              sx={style}
            >
              {coins.map((elem) => {
                return (<MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>);
              })}
            </Select>
          </Grid2>
        </Grid2>



      </>}

    </>

  )
}

export default CompareSelect;