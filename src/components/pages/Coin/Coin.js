import React, { useEffect, useState } from 'react'
import './Coin.css';
import coinData from '../../../services/coinData';
import coinPrices from '../../../services/coinPrices';
import { useParams } from 'react-router-dom';
import setChartData from '../../../functions/setChartData';
import LineChart from '../../chart/LineChart/LineChart';
import Container from '@mui/material/Container';
import Header from '../../common/Header/Header';
import List from '../../dashboard/List/List';
const Coin = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState({});
    const [chart, setChart] = useState({});
    const [days, setDays] = useState(60);
    const [priceType, setPriceType] = useState("prices");
    useEffect(()=>{
        getCoinData();
    },[]);

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
          const prices = await coinPrices(id, days, priceType);
        //   console.log(prices);
          if (prices.length > 0) {
            setChartData(setChart, prices);
            setIsLoading(false);
          }
        }
      }

  return (
    <>
        <Header/>

        <br/>
        {isLoading ? <></>:
        <>
        <Container maxWidth="lg">
        <List coin={coin} key={1} />
        </Container>
        <Container maxWidth="lg">
            <LineChart chartData={chart} priceType={priceType} />
        </Container>
        </>
        }
    </>
  )
}

export default Coin;