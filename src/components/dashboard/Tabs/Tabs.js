import React, { useState } from "react";
// import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import List from '../List/List';
import Grid from '../Grid/Grid';
import "./Tabs.css";
import Grid2 from '@mui/material/Unstable_Grid2';

export default function TabsComponent({ coins }) {
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

  return (
    <ThemeProvider theme={theme}>
      <TabContext  value={value}>
      {/* <Box  sx={{ borderBottom: 1, borderColor: '#414141' }}> */}
        <TabList  onChange={handleChange}  centered>
          <Tab label="Grid View" alignItems="center" value="grid" sx={{color:"white", padding:"0"}} />
          <Tab label="LIST VIEW" alignItems="center" value="list" sx={{color:"white", padding:"0"}}/>
        </TabList>
{/* </Box> */}
        <TabPanel value="grid" sx={{padding: "20px 0"}}>

          <Grid2 container spacing={2}>
          {coins.map((coin, i) => {
              return(
                <Grid2 xs={12} lg={3} key={i}>
              <Grid coin={coin} key={i} />
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
              <List coin={coin} key={i} />
                </Grid2>
              ); 
            })}
          </Grid2>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}