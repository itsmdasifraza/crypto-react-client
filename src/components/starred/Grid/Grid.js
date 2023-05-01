import React from "react";
import "./Grid.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';
import starredCoin from "../../../functions/starredCoin";
import { useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

function Grid({ coin, index }) {
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
    <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index/10 }} className="rel-obj76">
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
        <div className="container76">
          <div className="flex76">
          <Tooltip title="Icon" placement="bottom-start">
            <img src={coin.image} alt={coin.id} className="coin-logo76" />
          </Tooltip>
            <Tooltip title="Coin Info" placement="bottom-start">
            <div className="crypt-name76">
              <h4>{coin.name}</h4>
              <p>{coin.symbol}</p>
            </div>
            </Tooltip>
            <div><StarsIcon sx={{ fontSize: 30 }} /></div>
          </div>
          <div className="change-percentage76">
            <div className=" " style={style} >
            <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
              <div>
              <p style={{marginTop:"20px"}}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
            </Tooltip>
            </div>
            <div>
            <Tooltip title="Current Price">
              <h3 style={style}>${coin.current_price.toLocaleString()}</h3>
            </Tooltip>
            </div>
            <div className="">
            <Tooltip title="Insight In 24Hrs" placement="bottom-start">
              {coin.price_change_percentage_24h > 0 ?
                <p><TrendingUpRoundedIcon style={style} /></p> :
                <p><TrendingDownRoundedIcon style={style} /></p>}
            </Tooltip>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Grid;