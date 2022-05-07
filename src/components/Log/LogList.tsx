import { PropsLogList } from "../../models/Model";
import LogCard from "../UI/Card/LogCard";

const LogList = ({ sortedStudyLogs }: PropsLogList) => {
  return (
    <div>
      <ul className="">
        {/* test */}
        {sortedStudyLogs.map((log, index) => {
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
