import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import List from '../List/List';
import Grid from '../Grid/Grid';
import "./Tabs.css";
import Grid2 from '@mui/material/Unstable_Grid2';
import Search from '../Search/Search';

export default function TabsComponent({ coins, searchText, handleSearchBar }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  // const searchText = (text) =>{
  //   searchBar(text);
  // }
  return (
    <ThemeProvider theme={theme}>
      <TabContext  value={value}>
      <Grid2 container spacing={2}>
      <Grid2 xs={12} sm={6} key={56}>
      <Search searchText ={searchText} handleSearchBar={handleSearchBar}/>
      </Grid2>
      <Grid2 xs={12} sm={6} key={76}>
      <Box  sx={{ borderBottom: 1, borderColor: '#414141' }}>
      <TabList  onChange={handleChange}  >
          <Tab label="GRID VIEW"  value="grid" sx={{color:"white", padding:"0"}} />
          <Tab className="list-view-34" label="LIST VIEW"  value="list" sx={{color:"white", padding:"0"}}/>
        </TabList>
</Box>
      </Grid2>
      </Grid2>
       
        <TabPanel value="grid" sx={{padding: "20px 0"}}>

          <Grid2 container spacing={2}>
          {coins.map((coin, i) => {
              return(
                <Grid2 xs={12} sm={6} md={4} lg={3}  key={i}>
              <Grid coin={coin} index={i} key={i} />
                </Grid2>
              ); 
              
              
            })}
          </Grid2>
        </TabPanel>
        <TabPanel value="list" sx={{padding: "20px 0"}}>
        <Grid2 container spacing={0}>
          {coins.map((coin, i) => {
              return(
                <Grid2 xs={12} key={i}>
              <List coin={coin} index={i} key={i} />
                </Grid2>
              ); 
            })}
          </Grid2>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}