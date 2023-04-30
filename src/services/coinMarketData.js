import axios from "axios";

const coinMarketData = (id, days) => {
    let promise = new Promise((resolve, reject)=>{
        axios
        .get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
            { crossDomain: true }
          )
        .then((res) => {
            // console.log(res.data);
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
            //console.log(err);
        });
    });
    return promise;
};

export default coinMarketData;