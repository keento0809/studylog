import { useContext, useEffect, useState, useRef, SetStateAction } from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import {
  PropsLogList,
  StudyLogObj,
  StudyLogObjFinal,
} from "../../models/Model";
import LogCard from "../UI/Card/LogCard";
// import getData from "../API/getData";
import { getAuth } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../pages/Main";

const LogList = () => {
  // declare useContext
  const studyLogsCtx = useContext(StudyLogsContext);

  const auth = getAuth();
  const currentUserId = auth.currentUser?.uid;
  // declare useState
  // original code
  // const [studyLogs, setStudyLogs] = useState<StudyLogObj[]>([]);
  const [studyLogs, setStudyLogs] = useState<StudyLogObjFinal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [justifyC, setJustifyC] = useState(false);

  // declare useRef
  const testRef = useRef<HTMLDivElement>(null);

  const getStudyLogs = async () => {
    setIsLoading(true);

    try {
      // const response = await fetch(
      //   "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
      // );
      // if (!response.ok) throw new Error("Request failed.");
      // const data = await response.json();

      // test: get data
      const querySnapshot = await getDocs(collection(db, "logs"));
      const newLoadedData: StudyLogObjFinal[] = [];

      querySnapshot.forEach((doc: any) => {
        if (currentUserId === doc.data()["userId"]) {
          newLoadedData.push({
            date: doc.data()["date"],
            cost: doc.data()["cost"],
            hour: doc.data()["hour"],
            summary: doc.data()["summary"],
            location: {
              lat: doc.data()["location"]["lat"],
              lng: doc.data()["location"]["lng"],
            },
          });
        }
      });

      console.log(newLoadedData);

      // const loadedData: StudyLogObjFinal[] = [];
      // const loadedDates = [];

      // for (const key in data) {
      //   loadedData.push({
      //     date: data[key].date,
      //     cost: data[key].cost,
      //     hour: data[key].hour,
      //     summary: data[key].summary,
      //     location: data[key].location,
      //   });
      //   loadedDates.push({
      //     date: data[key].date,
      //   });
      // }
      // test
      setStudyLogs(newLoadedData);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStudyLogs();
  }, []);

  useEffect(() => {
    const sortedArr = studyLogs.sort(function (
      a: StudyLogObjFinal,
      b: StudyLogObjFinal
    ) {
      return a.date < b.date ? 1 : -1;
    });
    studyLogsCtx.setInitialStudyLogs(sortedArr);
  }, [studyLogs]);

  useEffect(() => {
    // console.log(testRef.current!.offsetWidth);
    if (
      window.innerWidth > 1023 &&
      testRef.current!.offsetWidth > 468 &&
      testRef.current!.offsetWidth < 500
    )
      setJustifyC(true);
  }, []);

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
        // original code: lg:justify-start
        // ${justifyC ? "justify-center" : ""}
        <div
          ref={testRef}
          className={`lg:flex lg:justify-center lg:items-center lg:w-11/12 lg:mx-auto`}
        >
          <ul
            className={`overflow-scroll lg:flex ${
              justifyC ? "justify-center" : "justify-start"
            } lg:flex-row lg:flex-wrap`}
          >
            {studyLogsCtx.studyLogsData.map(
              // original code
              // (log: StudyLogObj, index: number) => {
              (log: StudyLogObjFinal, index: number) => {
                return (
                  // test minWidth min-w-298
                  <li key={index} className="lg:basis-4/12 min-w-298">
                    <LogCard
                      date={log.date}
                      hour={log.hour}
                      cost={log.cost}
                      summary={log.summary}
                      location={log.location}
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
