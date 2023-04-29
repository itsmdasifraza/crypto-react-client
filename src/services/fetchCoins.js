import axios from "axios";

const fetchCoins = () => {
  const coins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((res) => {
      // console.log("res", res);
      let starredCoins = localStorage.getItem("starred_coins");
      if(starredCoins){
        starredCoins = JSON.parse(starredCoins);
      } 
      else{ starredCoins = [];}

      let data = res.data.map((elem)=>{
        if(starredCoins.includes(elem.id)){
          elem['starred'] = true;
        }
        else {elem['starred'] = false;}
        return elem;
      });
      console.log("res", data);
      return data;
    })
    .catch((err) => {
      console.log("err", err);
    });

  return coins;
};

export {fetchCoins} ;