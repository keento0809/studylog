import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import { DataObj } from "../../../models/Model";
import axios from "axios";

const AnalysisHourChart = () => {
  // declare useState
  const [dataForChart, setDataForChart] = useState<DataObj[]>([]);

  const fetchingData = () => {
    axios
      .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
      .then((data) => {
        const result = data.data;
        console.log(result);

        const loadedDataForChart = [];
        for (const key in result) {
          loadedDataForChart.push({
            date: result[key].date,
            value: parseFloat(result[key].hour),
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
    <HomeCard label="Hours" isHome={false}>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </HomeCard>
  );
};

export default AnalysisHourChart;