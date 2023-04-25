import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchCoins } from '../../../services/fetchCoins';
import Grid2 from '@mui/material/Unstable_Grid2';

const CompareSelect = ({coinOne, coinTwo, handleCoinOneChange, handleCoinTwoChange }) => {

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
    {isLoading ? <></>:   <>
    <Grid2 container spacing={2}>
                <Grid2 xs={12} sm={2}>
                <InputLabel id="demo-simple-select-label" sx={{color:"white"}} >Select coin one</InputLabel>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={coinOne}
    label="coinOne"
    onChange={handleCoinOneChange}
    
    sx={style}
  >
    {coins.map((elem)=>{
        return(  <MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>);
    })}
  </Select>
                </Grid2>
                <Grid2 xs={12} sm={2}>
                <InputLabel id="demo-simple-select-label" sx={{color:"white"}} >Select coin two</InputLabel>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={coinTwo}
    label="coinTwo"
    onChange={handleCoinTwoChange}
    
    sx={style}
  >
 {coins.map((elem)=>{
        return(  <MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>);
    })}
  </Select>
                </Grid2>
    </Grid2>


  
    </>}
     
    </>
   
  )
}

export default CompareSelect;