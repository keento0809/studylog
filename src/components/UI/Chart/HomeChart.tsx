import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import axios from "axios";

const HomeChart: React.FC = () => {
  // declare useState
  // I need to fix this part
  const [costData, setCostData] = useState<any>([]);
  // fetch data from firebase
  const fetchingData = () => {
    axios
      .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
      .then((data) => {
        console.log(data.data);
        const result = data.data;

        const loadedData = [];
        for (const key in result) {
          // props.indicator
          loadedData.push(result[key].cost);
        }
        console.log(loadedData);
        setCostData(loadedData);
      })
      .catch((error) => console.log(error.message));
  };
  const config = {
    height: 60,
    autoFit: false,
    data: costData,
    smooth: true,
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <HomeCard label="Costs">
        <TinyArea {...config} />
      </HomeCard>
    </div>
  );
};

export default HomeChart;
