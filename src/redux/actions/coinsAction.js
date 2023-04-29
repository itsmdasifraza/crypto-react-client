const setCoins = (coins) => {
  return {
    type: "SET_COINS",
    payload: coins,
  };
};


export {setCoins};