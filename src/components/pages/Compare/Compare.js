import React, { useState, useEffect } from 'react'
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
import ChartType from '../../coin/ChartType/ChartType';
import Grid2 from '@mui/material/Unstable_Grid2';
import Grid from '../../dashboard/Grid/Grid';
import { useSelector } from "react-redux";
import Footer from '../../common/Footer/Footer';
import scrollToTop from '../../../functions/scrollToTop';

export const Compare = () => {
    const coins = useSelector((state) => state.coins);
    const [coinOne, setCoinOne] = useState("bitcoin");
    const [coinTwo, setCoinTwo] = useState("ethereum");
    const [coinOneData, setCoinOneData] = useState(undefined);
    const [coinTwoData, setCoinTwoData] = useState(undefined);
    const [marketDataOne, setMarketDataOne] = useState(undefined);
    const [marketDataTwo, setMarketDataTwo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [chart, setChart] = useState({});
    const [isChartLoading, setIsChartLoading] = useState(true);
    const [days, setDays] = useState(60);
    const [chartType, setChartType] = useState("prices");

    document.title = `Compare | CoinStats`;

    useEffect(()=>{
        scrollToTop();
      },[]);

    // updating both coin data on apps redux store load
    useEffect(() => {
        getCoinData(coinOne, setCoinOneData);
        getCoinData(coinTwo, setCoinTwoData);
    }, [coins]);

    // updating coin data, prices, market_caps, total volumes of coin one
    useEffect(() => {
        getCoinData(coinOne, setCoinOneData);
        getMarket(coinOne, days, setMarketDataOne);
    }, [coinOne]);

    // updating coin data, prices, market_caps, total volumes of coin two  
    useEffect(() => {
        getCoinData(coinTwo, setCoinTwoData);
        getMarket(coinTwo, days, setMarketDataTwo);
    }, [coinTwo]);

    // Fetching coin data
    async function getCoinData(id, fun) {
        if(coins.length > 0){
            let data = [...coins].filter((elem)=>{
              if(elem.id === id) return true;
              return false;
            });
            fun(data[0]);
          }
    }

    // Toggling main Loader
    useEffect(() => {
        if (coinOneData && coinTwoData) {
            setIsLoading(false);
        }
    }, [coinOneData, coinTwoData]);

    // updating prices, market_caps, total volumes of both coins onChange select days
    useEffect(() => {
        getMarket(coinOne, days, setMarketDataOne);
        getMarket(coinTwo, days, setMarketDataTwo);
    }, [days]);

    // refreshing (updating) graphs of chart.js  
    useEffect(() => {
        if (marketDataOne && marketDataTwo) {
            setChartData(setChart, marketDataOne[chartType], marketDataTwo[chartType]);
            setIsChartLoading(false);
        }
    }, [marketDataOne, marketDataTwo, chartType]);


    // fetching prices, market_caps, total volumes of a coin
    async function getMarket(c, d, fun) {
        const market = await coinMarketData(c, d);
        if (market) {
            fun(market);
        }
    }

    const handleCoinOneChange = (event) => {
        setCoinOne(event.target.value);
    }
    const handleCoinTwoChange = (event) => {
        setCoinTwo(event.target.value);
    }

    const handleDaysChange = async (event) => {
        setDays(event.target.value);
    };
    const handleChartTypeChange = async (event) => {
        setChartType(event.target.value);
    };
    return (
        <div>
            <Header />
            <br />
            <Container maxWidth="lg">
                <CompareSelect coinOne={coinOne} coinTwo={coinTwo} handleCoinOneChange={handleCoinOneChange} handleCoinTwoChange={handleCoinTwoChange} />
            </Container>
            <br />
            {isLoading ? <></> :
                <>
                    <Container maxWidth="lg">
                        <div className="list-view-67">
                        <List coin={coinOneData}  />
                        <List coin={coinTwoData}  />
                        </div>
                        <div className="grid-view-67">
                        <Grid coin={coinOneData} />
                        <br/>
                        <Grid coin={coinTwoData}  />

                        </div>
                    </Container>
                    <br/>
                    <Container maxWidth="lg">
                        {isChartLoading ? <></> :
                            <>
                                <Grid2 container spacing={0} >
                                    <Grid2 xs={12} sm={3} md={3} >
                                        <SelectDays days={days} handleDaysChange={handleDaysChange} />
                                    </Grid2>
                                    <Grid2 xs={12} sm={1} md={3} >

                                    </Grid2>
                                    <Grid2 xs={12} sm={8} md={6}>
                                        <br />
                                        <ChartType chartType={chartType} handleChartTypeChange={handleChartTypeChange} />

                                    </Grid2>
                                </Grid2>
                                <br/>
                                <LineChart chartData={chart} chartType={chartType} />
                            </>
                        }
                    </Container>
                </>
            }
            <Footer/>
        </div>
    )
}
