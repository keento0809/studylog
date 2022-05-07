import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
// temporary
import LogList from "../components/Log/LogList";
import LogCard from "../components/UI/Card/LogCard";
import { StudyLogObj } from "../models/Model";

const History = () => {
  // declare useState
  const [studyLogs, setStudyLogs] = useState<StudyLogObj[]>([]);
  const [sortedStudyLogs, setSortedStudyLogs] = useState<StudyLogObj[]>([]);
  // const [logDates, setLogDates] = useState<any>([[]]);

  const getStudyLogs = async () => {
    const response = await fetch(
      "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
    );
    const data = await response.json();

    const loadedData: StudyLogObj[] = [];
    const loadedDates = [];

    for (const key in data) {
      loadedData.push({
        date: data[key].date,
        cost: data[key].cost,
        hour: data[key].hour,
        summary: data[key].summary,
      });
      loadedDates.push({
        date: data[key].date,
      });
    }
    setStudyLogs(loadedData);
  };

  useEffect(() => {
    getStudyLogs();
  }, []);

  useEffect(() => {
    const sortedArr = studyLogs.sort(function (a: StudyLogObj, b: StudyLogObj) {
      return a.date < b.date ? 1 : -1;
    });
    setSortedStudyLogs(sortedArr);
  }, [studyLogs]);

  return (
    <Layout>
      <div className="text-center">
        <div className="py-3">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            History
          </h1>
        </div>
        <LogList sortedStudyLogs={sortedStudyLogs} />
      </div>
    </Layout>
  );
};

export default History;
