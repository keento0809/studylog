import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
// temporary
import LogCard from "../components/UI/Card/LogCard";
import { StudyLogObj } from "../models/Model";
import axios from "axios";

const History = () => {
  // declare useState
  const [studyLogs, setStudyLogs] = useState<any>([[]]);

  const getStudyLogs = async () => {
    // axios
    //   .get("https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json")
    //   .then((data) => {

    //     // setStudyLogs(loadedData);
    //   })
    //   .catch((error) => console.log(error.message));
    const response = await fetch(
      "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
    );
    const data = await response.json();

    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        cost: data[key].cost,
        hour: data[key].hour,
        summary: data[key].summary,
      });
    }
    console.log(loadedData);
    setStudyLogs(loadedData);
  };
  console.log(studyLogs);

  useEffect(() => {
    getStudyLogs();
  }, []);

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
          {/* I'm gonna add logList here. */}
          {studyLogs.map((log: StudyLogObj, index: string) => {
            return (
              <li key={index}>
                {/* <p>{log.hour}</p>
                <p>{log.cost}</p>
                <p>{log.summary}</p> */}
                <LogCard
                  hour={log.hour}
                  cost={log.cost}
                  summary={log.summary}
                />
              </li>
            );
          })}
          {/* <LogCard />
          <LogCard />
          <LogCard />
          <LogCard /> */}
        </ul>
      </div>
    </Layout>
  );
};

export default History;
