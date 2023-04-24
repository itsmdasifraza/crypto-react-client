import axios from "axios";

const coinPrices = (id, days, priceType) => {
    let promise = new Promise((resolve, reject)=>{
        axios
        .get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
            { crossDomain: true }
          )
        .then((res) => {
            console.log(res.data[priceType]);
            resolve(res.data[priceType]);
        })
        .catch((err) => {
            reject(err);
            //console.log(err);
        });
    });
    return promise;
};

export default coinPrices;