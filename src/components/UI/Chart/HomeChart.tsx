import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import axios from "axios";
import { StudyLogObjFinal } from "../../../models/Model";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../pages/Main";

const HomeChart: React.FC = () => {
  // declare useState
  // I need to fix this part
  const [costData, setCostData] = useState<any>([]);
  // fetch data from firebase
  const fetchingData = async () => {
    // axios
    //   .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
    //   .then((data) => {
    //     console.log(data.data);
    //     const result = data.data;

    //     const loadedData = [];
    //     for (const key in result) {
    //       // props.indicator
    //       loadedData.push(result[key].cost);
    //     }
    //     console.log(loadedData);
    //     setCostData(loadedData);
    //   })
    //   .catch((error) => console.log(error.message));

    const querySnapshot = await getDocs(collection(db, "logs"));
    const newLoadedData: StudyLogObjFinal[] = [];

    querySnapshot.forEach((doc: any) => {
      newLoadedData.push(doc.data()["cost"]);
    });
    setCostData(newLoadedData);
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
      <HomeCard label="Costs" isHome={false}>
        <TinyArea {...config} />
      </HomeCard>
    </div>
  );
};

export default HomeChart;
