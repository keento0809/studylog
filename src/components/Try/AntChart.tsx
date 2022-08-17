import React from "react";
import { Line } from "@ant-design/charts";
// import { TinyArea } from "@ant-design/charts";
import HomeCard from "../UI/Card/HomeCard";

const AntChart: React.FC = () => {
  const data = [
    { date: "22/04/01", value: 3 },
    { date: "22/04/02", value: 1.5 },
    { date: "22/04/03", value: 3.5 },
    { date: "22/04/04", value: 5 },
    { date: "22/04/05", value: 8 },
    { date: "22/04/06", value: 2.5 },
    { date: "22/04/07", value: 7 },
    { date: "22/04/08", value: 9 },
    { date: "22/04/09", value: 10 },
  ];

  const config = {
    data,
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

  let chart;

  return (
    <HomeCard label="Hours" isHome={false}>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </HomeCard>
  );
};

export default AntChart;
