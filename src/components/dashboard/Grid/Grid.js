import React from "react";
import "./Grid.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';

function Grid({ coin }) {
  const style = {
    color:
      coin.price_change_percentage_24h < 0
        ? "red"
        : "green",
  }
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="container87">
        <div className="flex43">
          <img src={coin.image} alt={coin.id} className="coin-logo43" />
          <div className="crypt-name87">
            <h4>{coin.name}</h4>
            <p>{coin.symbol}</p>
          </div>
          <div><StarsIcon sx={{fontSize:30}}/></div>
        </div>
          <div className="change-percentage87">
            <div className=" " style={style} >
              <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div>
                <h3 style={style}>${coin.current_price.toLocaleString()}</h3>
            </div>
            <div className="">
              {coin.price_change_percentage_24h > 0 ?
              <p><TrendingUpRoundedIcon style={style}/></p> :
              <p><TrendingDownRoundedIcon style={style} /></p>}
            </div>
          </div>
       
        <div className="">
          <p style={{textAlign:"center"}}>Total Volume: {coin.total_volume.toLocaleString()}</p>
          <p style={{textAlign:"center"}}>Market Cap: ${coin.market_cap.toLocaleString()}</p>
          {/* <p style={{textAlign:"center"}}>Total Supply: {coin.total_supply}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default Grid;