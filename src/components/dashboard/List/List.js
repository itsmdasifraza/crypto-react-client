import React from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
// import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';
import starredCoin from "../../../functions/starredCoin";
import { useDispatch } from "react-redux";

function List({ coin }) {
  const dispatch = useDispatch();
  const style = {
    color:
      coin.price_change_percentage_24h < 0
        ? "red"
        : "green",
  }
  const handleStarredItem = () => {
    starredCoin(coin, dispatch);
  }

  return (
    <div className="rel-obj11">
      <div className="icon" onClick={handleStarredItem}>
        {coin.starred ?
        <Tooltip title="Unstar" placement="bottom-start">
          <StarsIcon color="primary" sx={{ fontSize: 30 }} />
        </Tooltip>
          :
          <Tooltip title="Star" placement="bottom-start">
            <StarsIcon color="" sx={{ fontSize: 30 }} />
          </Tooltip>
        }
      </div>
      <Link to={`/coin/${coin.id}`}>
        <div className="d-flex">
          <div className="f-width">
            <Tooltip title="Icon" placement="bottom-start">
              <div>
                <img src={coin.image} alt={coin.id} className="coin-logo" />
              </div>
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Coin Info" placement="bottom-start">
              <div>
                <div className="">
                  <p className="" style={{ margin: 0 }}>{coin.name}</p>
                  <p className="" style={{ margin: 0 }}>{coin.symbol}</p>
                </div>
              </div>
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
              <p style={style}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Insight In 24Hrs" placement="bottom-start">
              {coin.price_change_percentage_24h > 0 ?
                <p><TrendingUpRoundedIcon style={style} /></p> :
                <p><TrendingDownRoundedIcon style={style} /></p>}
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Current Price">
              <p style={style}>${coin.current_price.toLocaleString()}</p>
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Total Volume" placement="bottom-start">
              <p>{coin.total_volume.toLocaleString()}</p>
            </Tooltip>
          </div>
          <div className="f-width">
            <Tooltip title="Market Cap">
              <p>${coin.market_cap.toLocaleString()}</p>
            </Tooltip>
          </div>
          <div className="f-width">

          </div>


        </div>




      </Link>

    </div>

  );
}

export default List;