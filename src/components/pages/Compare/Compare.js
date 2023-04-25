import React , {useState, useEffect} from 'react'
import './Compare.css';
import CompareSelect from '../../compare/CompareSelect/CompareSelect';
import coinData from '../../../services/coinData';
import setChartData from '../../../functions/setChartData';
import coinMarketData from '../../../services/coinMarketData';
import Header from '../../common/Header/Header';
import List from '../../dashboard/List/List';
import Container from '@mui/material/Container';
import SelectDays from '../../coin/SelectDays/SelectDays';
import LineChart from '../../chart/LineChart/LineChart';
export const Compare = () => {

    const [coinOne, setCoinOne] = useState("bitcoin");
    const [coinTwo, setCoinTwo] = useState("ethereum");
    const [coinOneData, setCoinOneData] = useState({});
    const [coinTwoData, setCoinTwoData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [chart, setChart] = useState({});
    const [days, setDays] = useState(60);
    const [chartType, setChartType] = useState("prices");
    
    useEffect(()=>{getCoinData()}, [coinOne, coinTwo, days, chartType]);


      async function getCoinData() {
        setIsLoading(true);
        const data1 = await coinData(coinOne);
        if (data1) {
          const data2 = await coinData(coinTwo);
          setCoinOneData({
            id: data1.id,
            name: data1.name,
            symbol: data1.symbol,
            image: data1.image.large,
            desc: data1.description.en,
            price_change_percentage_24h: data1.market_data.price_change_percentage_24h,
            total_volume: data1.market_data.total_volume.usd,
            current_price: data1.market_data.current_price.usd,
            market_cap: data1.market_data.market_cap.usd,
            });
          if (data2) {
            setCoinTwoData({
                id: data2.id,
                name: data2.name,
                symbol: data2.symbol,
                image: data2.image.large,
                desc: data2.description.en,
                price_change_percentage_24h: data2.market_data.price_change_percentage_24h,
                total_volume: data2.market_data.total_volume.usd,
                current_price: data2.market_data.current_price.usd,
                market_cap: data2.market_data.market_cap.usd,
              });
            const prices1 = await coinMarketData(coinOne, days, chartType);
            const prices2 = await coinMarketData(coinTwo, days, chartType);
            setChartData(setChart, prices1, prices2);
            setIsLoading(false);
          }
        }
      }

    const handleCoinOneChange = (event) =>{
        setCoinOne(event.target.value);
    }
    const handleCoinTwoChange = (event) =>{
        setCoinTwo(event.target.value);
    }

    const handleDaysChange = async (event) => {
        setDays(event.target.value);
      };
  return (
    <div>
        <Header />
        <br />
        <Container maxWidth="lg">
            <CompareSelect coinOne = {coinOne} coinTwo={coinTwo} handleCoinOneChange = {handleCoinOneChange} handleCoinTwoChange={handleCoinTwoChange} />
            <SelectDays  days={days} handleDaysChange={handleDaysChange} />
        </Container>
        <br/>
        {isLoading ? <></> :
         <>
            <Container maxWidth="lg">
                    <List coin={coinOneData} key={1} />
                    <List coin={coinTwoData} key={2} />
            </Container>
            <Container maxWidth="lg">
                <LineChart chartData={chart} chartType={chartType} />
          </Container>
        </>
}
    </div>
  )
}
