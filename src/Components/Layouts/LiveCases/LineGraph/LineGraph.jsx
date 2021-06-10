import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { Line } from "react-chartjs-2";
import "./LineGraph.css";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "l1",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          callback: function (value) {
            return numeral(value).format("0,0");
          },
        },
      },
    ],
  },
};

const casesTypeColors = {
  cases: {
    hex: "#2a81ea",
  },
  recovered: {
    hex: "#1ee0ac",
  },
  deaths: {
    hex: "#ff4f5b",
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  for (let date in data.cases) {
    let newDataPoint = {
      x: date,
      y: data[casesType][date],
    };
    chartData.push(newDataPoint);
  }
  return chartData;
};

function LineGraph({ casesType, countryForGraph = "India" }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${countryForGraph}?lastdays=365`
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          let chartData = buildChartData(res.timeline, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div className="graph_container">
      <h1>Cases over time</h1>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                borderColor: `${casesTypeColors[casesType].hex}`,
                data: data,
                borderWidth: 2,
              },
            ],
          }}
          options={options}
          height={200}
        />
      )}
    </div>
  );
}

export default LineGraph;
