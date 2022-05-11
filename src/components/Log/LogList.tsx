import { useContext, useEffect, useState } from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import { PropsLogList, StudyLogObj, IsHome } from "../../models/Model";
import LogCard from "../UI/Card/LogCard";

const LogList = () => {
  // declare useContext
  const studyLogsCtx = useContext<any>(StudyLogsContext);

  // declare useState
  const [studyLogs, setStudyLogs] = useState<StudyLogObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStudyLogs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
      );
      if (!response.ok) throw new Error("Request failed.");
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
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
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
      {isLoading && (
        <div>
          <h3 className="text-xl font-bold">Loading...</h3>
          <div
            className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-emerald-400 dark:text-emerald-500
      "
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="lg:flex lg:justify-center lg:items-center lg:w-11/12 lg:mx-auto">
          <ul className="overflow-scroll lg:flex lg:justify-start lg:flex-row lg:flex-wrap">
            {studyLogsCtx.studyLogsData.map(
              (log: StudyLogObj, index: string) => {
                return (
                  <li key={index} className="lg:basis-4/12">
                    <LogCard
                      date={log.date}
                      hour={log.hour}
                      cost={log.cost}
                      summary={log.summary}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogList;
