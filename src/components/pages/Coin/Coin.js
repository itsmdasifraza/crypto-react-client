import React, { useEffect, useState } from 'react'
import './Coin.css';
import coinMarketData from '../../../services/coinMarketData';
import { useParams } from 'react-router-dom';
import setChartData from '../../../functions/setChartData';
import LineChart from '../../chart/LineChart/LineChart';
import Container from '@mui/material/Container';
import Header from '../../common/Header/Header';
import List from '../../dashboard/List/List';
import SelectDays from '../../coin/SelectDays/SelectDays';
import ChartType from '../../coin/ChartType/ChartType';
import Grid2 from '@mui/material/Unstable_Grid2';
import Grid from '../../dashboard/Grid/Grid';
import { useSelector } from "react-redux";
import Footer from '../../common/Footer/Footer';
const Coin = () => {

  const { id } = useParams();
  const coins = useSelector((state) => state.coins);
  const [isCoinLoading, setIsCoinLoading] = useState(true);
  const [isChartLoading, setIsChartLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [chart, setChart] = useState({});
  const [days, setDays] = useState(60);
  const [chartType, setChartType] = useState("prices");
  const [marketData, setMarketData] = useState({});

  useEffect(()=>{
    if(coins.length > 0 && id){
      let data = [...coins].filter((elem)=>{
        if(elem.id === id) return true;
        return false;
      });
      setCoin(data[0]);
      setIsCoinLoading(false);
    }
  },[coins,id ]);

  useEffect(() => {
    getCoinMarketData();
    async function getCoinMarketData(){
      const market = await coinMarketData(id, days);
      if (market) {
        setMarketData(market);
        setChartData(setChart, market[chartType]);
        setIsChartLoading(false);
      }
    }
  }, [days, id]);

 
  

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
  };
  const handleChartTypeChange = async (event) => {
      setChartType(event.target.value);
      setChartData(setChart,marketData[event.target.value]);
  }
  return (
    <>
      <Header />

      <br />
      {isCoinLoading ? <></> :
        <>
          <Container maxWidth="lg">
            <div className="list-view-78">
            <List coin={coin} />

            </div>
            <div className="grid-view-78">
            <Grid coin={coin} />

            </div>
          </Container>
          <br />

          <Container maxWidth="lg">
            <Grid2 container spacing={0} >
              <Grid2 xs={12} sm={3} md={3} >
                <SelectDays  days={days} handleDaysChange={handleDaysChange} />
              </Grid2>
              <Grid2 xs={12} sm={1} md={3} >
                
              </Grid2>
              <Grid2 xs={12} sm={8}   md={6}>
                <br/>
                <ChartType  chartType={chartType} handleChartTypeChange={handleChartTypeChange} />

              </Grid2>
            </Grid2>
          </Container>
          <br />
          <Container maxWidth="lg">
          {isChartLoading ? <></> :
            
             <LineChart chartData={chart} chartType={chartType} /> 
             
             }
          </Container>
        </>
      }
      <Footer/>
    </>
  )
}

export default Coin;