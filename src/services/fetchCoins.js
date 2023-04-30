import axios from "axios";
import { setCoins } from "../redux/actions/coinsAction";
const fetchCoins = () => {
  // Thunk function to fetch crypto coins from web server
  return (dispatch) => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        // console.log("coins", res);
        let starredCoins = localStorage.getItem("starred_coins");
        if (starredCoins) {
          starredCoins = JSON.parse(starredCoins);
        }
        else { starredCoins = []; }
        // updating coins starred/unstarred using local storage
        let data = res.data.map((elem) => {
          if (starredCoins.includes(elem.id)) {
            elem['starred'] = true;
          }
          else { elem['starred'] = false; }
          return elem;
        });
        // console.log("coins", data);
        dispatch(setCoins(data));
      })
      .catch((err) => {
        // console.log("err", err);
        dispatch(setCoins([]));
      });
  }
};

export { fetchCoins };