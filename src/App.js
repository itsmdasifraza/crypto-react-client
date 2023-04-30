import './App.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Coin from './components/pages/Coin/Coin';
import { Compare } from './components/pages/Compare/Compare';
import  Starred  from './components/pages/Starred/Starred';
import { fetchCoins } from './services/fetchCoins';
import { useDispatch } from "react-redux";
import NotFound from './components/pages/NotFound/NotFound';
function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCoins());
  },[dispatch]);

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coins" element={<Dashboard/>} />
          <Route path="/coin/:id" element={<Coin/>} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
