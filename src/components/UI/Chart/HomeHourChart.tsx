import React, { useEffect, useState, useContext } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import axios from "axios";
import LightModeContext from "../../../contexts/lightmode-context";

const HomeHistoryChart: React.FC = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);
  // declare useState
  // I need to fix this part
  const [hourData, setHourData] = useState<number[]>([]);

  let fillStyle = lightModeCtx.isLightMode ? "#374151" : "#fff";

  // fetch data from firebase
  const fetchingData = () => {
    axios
      .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
      .then((data) => {
        const result = data.data;

        const loadedHours = [];
        for (const key in result) {
          loadedHours.push(parseFloat(result[key].hour));
        }
        console.log(loadedHours);
        setHourData(loadedHours);
      })
      .catch((error) => console.log(error.message));
  };
  // original
  // const data = [264, 417, 0.5, 887];
  const config = {
    height: 60,
    autoFit: false,
    data: hourData,
    smooth: true,
    line: {
      color: "#34D499",
    },
    areaStyle: {
      fill: fillStyle,
    },
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <HomeCard label="Hours" isHome={true}>
        <TinyArea {...config} />
      </HomeCard>
    </div>
  );
};

export default HomeHistoryChart;
