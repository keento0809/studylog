import { useContext, useEffect, useState } from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import { PropsLogList, StudyLogObj } from "../../models/Model";
import LogCard from "../UI/Card/LogCard";

const LogList = () => {
  // declare useContext
  const studyLogsCtx = useContext<any>(StudyLogsContext);

  // declare useState
  const [studyLogs, setStudyLogs] = useState<StudyLogObj[]>([]);

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
    studyLogsCtx.setInitialStudyLogs(sortedArr);
  }, [studyLogs]);

  return (
    <div>
      <ul className="overflow-scroll">
        {/* test */}
        {studyLogsCtx.studyLogsData.map((log: StudyLogObj, index: string) => {
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
  );
};

export default LogList;
