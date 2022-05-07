import { useContext } from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import { PropsLogList, StudyLogObj } from "../../models/Model";
import LogCard from "../UI/Card/LogCard";

const LogList = ({ sortedStudyLogs }: PropsLogList) => {
  // declare useContext
  const studyLogsCtx = useContext<any>(StudyLogsContext);

  return (
    <div>
      <ul className="">
        {/* test */}
        {studyLogsCtx.studyLogsData.map((log: StudyLogObj, index: string) => {
          // {sortedStudyLogs.map((log, index) => {
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
