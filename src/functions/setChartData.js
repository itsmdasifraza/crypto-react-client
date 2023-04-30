import { convertDate } from "./convertDate";

const setChartOneData = (chartData, prices1, coinOne) => {
    chartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: coinOne,
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
};
const setChartTwoData = (chartData, prices1, prices2, coinOne, coinTwo) => {
    
      chartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: coinOne,
            data: prices1.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            borderColor: "#3a80e9",
            pointRadius: 0,
            yAxisID: "crypto1",
          },
          {
            label: coinTwo,
            data: prices2.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            borderColor: "#61c96f",
            pointRadius: 0,
            yAxisID: "crypto2",
          },
        ],
      });
  };

export {setChartOneData, setChartTwoData};