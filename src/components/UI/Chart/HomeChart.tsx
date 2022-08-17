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
  const [costData, setCostData] = useState<any>([]);
  // fetch data from firebase
  const fetchingData = async () => {
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
