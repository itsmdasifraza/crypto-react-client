import React from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
// import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row32">
        <Tooltip title="">
          <td className="td-image32">
            <img src={coin.image} style={{width:"100%"}} alt={coin.id} className="" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="">
              <p className="" style={{margin:0}}>{coin.symbol}</p>
              <p className="" style={{margin:0}}>{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="chip-green32">
                <p style={{margin:0}}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
              <div className="chip-green32">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="chip-red32">
                <p style={{margin:0}}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
              <div className="chip-red32">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price">
          <td>
            <p
              className=""
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="right">
          <td>
            <p className="">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="desktop-td-mkt">
            <p className=""style={{textAlign:"right"}}>
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="mobile-td-mkt">
            <p className="" style={{textAlign:"right"}} placement="bottom-end">
              {/* ${convertNumber(coin.market_cap)} */}
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List;