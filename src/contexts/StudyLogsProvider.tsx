import React from "react";
import StudyLogsContext from "./studyLogs-context";
import {
  StudyLogObj,
  PropsChildren,
  StudyLogsContextInterface,
} from "../models/Model";

const StudyLogsProvider = ({ children }: PropsChildren) => {
  const [studyLogsData, setStudyLogsData] = React.useState<StudyLogObj[]>([]);
  const [totalStudyHours, setTotalStudyHours] = React.useState(0);
  const [totalAmountCosts, setTotalAmountCosts] = React.useState(0);

  const handleSetInitialLogs = (logs: StudyLogObj[]) => {
    setStudyLogsData(logs);
  };

  const handleUpdateStudyLogsData = (log: StudyLogObj) => {
    setStudyLogsData((prevState) => {
      return [...prevState, log];
    });
  };

  const handleCountStudyHours = (log: StudyLogObj) => {
    const newStudyHour = parseInt(log.hour);
    setTotalStudyHours(newStudyHour + totalStudyHours);
  };

  const handleCountAmountCosts = (log: StudyLogObj) => {
    const newAmountCost = parseInt(log.cost);
    setTotalAmountCosts(newAmountCost + totalAmountCosts);
  };

  const studyLogsContext: StudyLogsContextInterface = {
    studyLogsData: studyLogsData,
    totalStudyHours: totalStudyHours,
    totalAmountCosts: totalAmountCosts,
    setInitialStudyLogs: handleSetInitialLogs,
    updateStudyLogsData: handleUpdateStudyLogsData,
    countTotalStudyHours: handleCountStudyHours,
    countTotalAmountCosts: handleCountAmountCosts,
  };

  return (
    <StudyLogsContext.Provider value={studyLogsContext}>
      {children}
    </StudyLogsContext.Provider>
  );
};

export default StudyLogsProvider;
