import React, { useEffect, useState, useContext } from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../Card/HomeCard";
import LightModeContext from "../../../contexts/lightmode-context";
import { HourDataObj, StudyLogObjFinal } from "../../../models/Model";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../pages/Main";
import { auth } from "../../../pages/Main";

const HomeHistoryChart: React.FC = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);

  const currentUserId = auth.currentUser?.uid;
  // declare useState
  // I need to fix this part
  const [hourData, setHourData] = useState<number[]>([]);

  let fillStyle = lightModeCtx.isLightMode ? "#374151" : "#fff";

  // fetch data from firebase
  const fetchingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "logs"));
      const newLoadedData: number[] = [];

      const testQuerySnapshot: any = [];

      querySnapshot.forEach((doc) => {
        if (currentUserId === doc.data()["userId"]) {
          testQuerySnapshot.push(doc.data());
        }
      });
      const sortedQuerySnapshot = testQuerySnapshot.sort(function (
        a: StudyLogObjFinal,
        b: StudyLogObjFinal
      ) {
        return a.date > b.date ? 1 : -1;
      });
      sortedQuerySnapshot.forEach((studyLog: StudyLogObjFinal) => {
        newLoadedData.push(Number(studyLog.hour));
      });
      setHourData(newLoadedData);
    } catch (error: any) {
      console.log(error.message);
    }
  };
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
