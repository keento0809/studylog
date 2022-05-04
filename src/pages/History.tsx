import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
// temporary
import LogCard from "../components/UI/Card/LogCard";
import { StudyLogObj } from "../models/Model";

const History = () => {
  // declare useState
  const [studyLogs, setStudyLogs] = useState<any>([[]]);
  const [sortedStudyLogs, setSortedStudyLogs] = useState<any>([[]]);
  // const [logDates, setLogDates] = useState<any>([[]]);

  const getStudyLogs = async () => {
    const response = await fetch(
      "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
    );
    const data = await response.json();

    const loadedData = [];
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
        {/* temporary: need to set max-height and overflow: scroll */}
        <ul className="">
          {/* test */}
          {sortedStudyLogs.map((log: StudyLogObj, index: string) => {
            return (
              <li key={index}>
                <LogCard
                  date={log.date}
                  hour={log.hour}
                  cost={log.cost}
                  summary={log.summary}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default History;
