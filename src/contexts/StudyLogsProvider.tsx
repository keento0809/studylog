import React from "react";
import StudyLogsContext from "./studyLogs-context";
import {
  StudyLogObj,
  PropsChildren,
  StudyLogsContextInterface,
  StudyLogObjFinal,
} from "../models/Model";

const StudyLogsProvider = ({ children }: PropsChildren) => {
  // original
  // const [studyLogsData, setStudyLogsData] = React.useState<StudyLogObj[]>([]);
  // test
  const [studyLogsData, setStudyLogsData] = React.useState<StudyLogObjFinal[]>(
    []
  );
  const [totalStudyHours, setTotalStudyHours] = React.useState(0);
  const [totalAmountCosts, setTotalAmountCosts] = React.useState(0);

  // original
  // const handleSetInitialLogs = (logs: StudyLogObj[]) => {
  const handleSetInitialLogs = (logs: StudyLogObjFinal[]) => {
    setStudyLogsData(logs);
  };

  // original
  // const handleUpdateStudyLogsData = (log: StudyLogObj) => {
  const handleUpdateStudyLogsData = (log: StudyLogObjFinal) => {
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
