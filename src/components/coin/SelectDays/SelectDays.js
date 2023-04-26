import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectDays = ({days, handleDaysChange}) => {

  return (
    <>
      <InputLabel id="demo-simple-select-label" sx={{color:"white"}} >Track changes in last</InputLabel>
      <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={days}
    label="days"
    onChange={handleDaysChange}
    
    sx={{
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
      }}
  >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
  </Select>
    </>
   
  )
}

export default SelectDays;