import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import { DataObj, HourDataObj } from "../../../models/Model";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../pages/Main";
import { auth } from "../../../pages/Main";

const AnalysisHourChart = () => {
  // declare useState
  const [dataForChart, setDataForChart] = useState<DataObj[]>([]);

  const currentUserId = auth.currentUser?.uid;

  const fetchingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "logs"));
      const newLoadedData: any = [];

      querySnapshot.forEach((doc) => {
        if (currentUserId === doc.data()["userId"]) {
          newLoadedData.push({
            date: doc.data()["date"],
            hour: Number(doc.data()["hour"]),
          });
        }
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
    yField: "hour",
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
    fetchingData();
  }, []);

  return (
    <HomeCard label="Hours" isHome={false}>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </HomeCard>
  );
};

export default AnalysisHourChart;
