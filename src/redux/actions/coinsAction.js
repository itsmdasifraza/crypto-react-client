const setCoins = (coins) => {
  return {
    type: "SET_COINS",
    payload: coins,
  };
};
const setStarredCoin = (id) => {
  return {
    type: "SETSTARRED_COIN",
    payload: id,
  };
};

const unsetStarredCoin = (id) => {
  return {
    type: "UNSETSTARRED_COIN",
    payload: id,
  };
};



export {setCoins, setStarredCoin, unsetStarredCoin};