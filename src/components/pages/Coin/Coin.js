import React, { useEffect, useState } from 'react'
import './Coin.css';
import coinData from '../../../services/coinData';
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

const Coin = () => {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [chart, setChart] = useState({});
  const [days, setDays] = useState(60);
  const [chartType, setChartType] = useState("prices");
  useEffect(() => {
    getCoinData();
  }, []);

  async function getCoinData() {
    const data = await coinData(id);
    // console.log(data);
    if (data) {
      setCoin({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.usd,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
      });
      const prices = await coinMarketData(id, days, chartType);
      //   console.log(prices);
      if (prices.length > 0) {
        setChartData(setChart, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const prices = await coinMarketData(id, parseInt(event.target.value), chartType);
    //   console.log(prices);
    if (prices.length > 0) {
      setChartData(setChart, prices);
    }
  };
  const handleChartTypeChange = async (event) => {
    setChartType(event.target.value);
    const prices = await coinMarketData(id, parseInt(days), event.target.value);
    //console.log(prices);
    if (prices.length > 0) {
      setChartData(setChart, prices);
    }
  }
  return (
    <>
      <Header />

      <br />
      {isLoading ? <></> :
        <>
          <Container maxWidth="lg">
            <List coin={coin} key={1} />
          </Container>
          <br />

          <Container maxWidth="lg">
            <Grid2 container spacing={0} >
              <Grid2 xs={12} sm={2} key={1}  >
                <SelectDays  days={days} handleDaysChange={handleDaysChange} />
              </Grid2>
              <Grid2 xs={12} sm={4} key={2}  >
                <br/>
                <ChartType  chartType={chartType} handleChartTypeChange={handleChartTypeChange} />

              </Grid2>
            </Grid2>
          </Container>
          <br />
          <Container maxWidth="lg">
            <LineChart chartData={chart} chartType={chartType} />
          </Container>
        </>
      }
    </>
  )
}

export default Coin;