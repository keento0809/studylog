import React, { useEffect, useState, useContext } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import axios from "axios";
import { CostDataObj } from "../../../models/Model";
import LightModeContext from "../../../contexts/lightmode-context";
import { StudyLogObjFinal } from "../../../models/Model";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../pages/Main";
import { getAuth } from "firebase/auth";

const HomeCostChart: React.FC = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);

  const auth = getAuth();
  const currentUserId = auth.currentUser?.uid;
  // declare useState
  // I need to fix this part
  const [costData, setCostData] = useState<number[]>([]);

  let fillStyle = lightModeCtx.isLightMode ? "#374151" : "#fff";

  // fetch data from firebase
  const fetchingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "logs"));
      const newLoadedData: number[] = [];

      const testQuerySnapshot: any = [];

      querySnapshot.forEach((doc) => {
        if (currentUserId === doc.data()["userId"])
          testQuerySnapshot.push(doc.data());
      });
      const sortedQuerySnapshot = testQuerySnapshot.sort(function (
        a: StudyLogObjFinal,
        b: StudyLogObjFinal
      ) {
        return a.date > b.date ? 1 : -1;
      });
      sortedQuerySnapshot.forEach((studyLog: StudyLogObjFinal) => {
        newLoadedData.push(Number(studyLog.cost));
      });
      setCostData(newLoadedData);
    } catch (error: any) {
      console.log(error.message);
    }
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
