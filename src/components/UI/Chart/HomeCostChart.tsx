import React, { useEffect, useState, useContext } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import axios from "axios";
import { CostDataObj } from "../../../models/Model";
import LightModeContext from "../../../contexts/lightmode-context";

const HomeCostChart: React.FC = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);
  // declare useState
  // I need to fix this part
  const [costData, setCostData] = useState<number[]>([]);

  let fillStyle = lightModeCtx.isLightMode ? "#374151" : "#fff";

  // fetch data from firebase
  const fetchingData = () => {
    axios
      .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
      .then((data) => {
        // console.log(data.data);
        const result = data.data;

        const loadedCosts = [];
        for (const key in result) {
          loadedCosts.push(result[key].cost);
        }
        // console.log(loadedCosts);
        setCostData(loadedCosts);
      })
      .catch((error) => console.log(error.message));
  };
  const config = {
    height: 60,
    autoFit: false,
    data: costData,
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
      <HomeCard label="Costs" isHome={true}>
        <TinyArea {...config} />
      </HomeCard>
    </div>
  );
};

export default HomeCostChart;
