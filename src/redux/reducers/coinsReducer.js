const intialState = [];

const coinsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_COINS":
      return payload;
    
    default:
      return state;
  }
};

export default coinsReducer;