import { setStarredCoin, unsetStarredCoin } from '../redux/actions/coinsAction';
const starredCoin = (coin, dispatch)=>{
    let starredCoins = localStorage.getItem("starred_coins");
    if(!starredCoins){
      localStorage.setItem("starred_coins", JSON.stringify([coin.id]));
    }
    else{
      starredCoins = JSON.parse(starredCoins);
      if(starredCoins.includes(coin.id)){
        // remove coin
        starredCoins = [...starredCoins].filter((elem)=>{
          if(elem === coin.id) return false;
          return true;
        })
        localStorage.setItem("starred_coins",JSON.stringify([...starredCoins]));
        dispatch(unsetStarredCoin(coin.id));
      }
      else{
        // add coin
        localStorage.setItem("starred_coins",JSON.stringify([...starredCoins,coin.id]));
        dispatch(setStarredCoin(coin.id));
      }
    }
  }
  export default starredCoin ;