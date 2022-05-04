import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import { DataObj } from "../../../models/Model";
import axios from "axios";

const AnalysisCostChart = () => {
  // declare useState
  const [dataForChart, setDataForChart] = useState<DataObj[]>([]);

  const fetchingData = () => {
    axios
      .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
      .then((data) => {
        const result = data.data;

        const loadedDataForChart = [];
        for (const key in result) {
          loadedDataForChart.push({
            date: result[key].date,
            value: result[key].cost,
          });
        }
        setDataForChart(loadedDataForChart);
      })
      .catch((error) => console.log(error.message));
  };

  const config = {
    data: dataForChart,
    width: 317,
    height: 317,
    autoFit: false,
    xField: "date",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  let chart: any;

  useEffect(() => {
    console.log("Rendered");
    fetchingData();
  }, []);

  return (
    <HomeCard label="Costs" isHome={false}>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </HomeCard>
  );
};

export default AnalysisCostChart;
