import axios from "axios";

const coinData = (id) => {
    let promise = new Promise((resolve, reject)=>{
        axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`, { crossDomain: true })
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

export default coinData;