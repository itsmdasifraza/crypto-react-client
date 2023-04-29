const setCoins = (coins) => {
  return {
    type: "SET_COINS",
    payload: coins,
  };
};
const starredCoin = (id) => {
  return {
    type: "STARRED_COIN",
    payload: id,
  };
};

const unstarredCoin = (id) => {
  return {
    type: "UNSTARRED_COIN",
    payload: id,
  };
};



export {setCoins, starredCoin, unstarredCoin};