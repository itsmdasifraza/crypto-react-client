const intialState = [];

const coinsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_COINS":
      return payload;
    case "SETSTARRED_COIN":
      let data = [...state].map((elem)=>{
        if(elem.id === payload){
          elem.starred = true;
        }
        return elem;
      });
      return data;
    case "UNSETSTARRED_COIN":
      let data1 = [...state].map((elem)=>{
        if(elem.id === payload){
          elem.starred = false;
        }
        return elem;
      });
      return data1;
    default:
      return state;
  }
};

export default coinsReducer;