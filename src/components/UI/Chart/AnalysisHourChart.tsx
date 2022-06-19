import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import { DataObj, HourDataObj } from "../../../models/Model";
import axios from "axios";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../pages/Main";

const AnalysisHourChart = () => {
  // declare useState
  const [dataForChart, setDataForChart] = useState<DataObj[]>([]);

  const fetchingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "logs"));
      const newLoadedData: any = [];

      querySnapshot.forEach((doc) => {
        newLoadedData.push({
          date: doc.data()["date"],
          value: Number(doc.data()["hour"]),
        });
      });
      // test
      const sortedArr = newLoadedData.sort(function (
        a: HourDataObj,
        b: HourDataObj
      ) {
        return a.date > b.date ? 1 : -1;
      });
      setDataForChart(sortedArr);
    } catch (error: any) {
      console.log(error.message);
    }
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
    color: "#34D499",
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
