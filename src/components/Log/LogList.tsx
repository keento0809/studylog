import { useContext, useEffect, useState, useRef, SetStateAction } from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import { StudyLogObjFinal } from "../../models/Model";
import LogCard from "../UI/Card/LogCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../pages/Main";
import { auth } from "../../pages/Main";

const LogList = () => {
  const studyLogsCtx = useContext(StudyLogsContext);
  const currentUserId = auth.currentUser?.uid;
  const [studyLogs, setStudyLogs] = useState<StudyLogObjFinal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [justifyC, setJustifyC] = useState(false);
  // declare useRef
  const testRef = useRef<HTMLDivElement>(null);
  const getStudyLogs = async () => {
    setIsLoading(true);
    try {
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
            userId: doc.data()["userId"],
          });
        }
      });
      setStudyLogs(newLoadedData);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStudyLogs();
    console.log(window.innerWidth, " : ", testRef.current!.offsetWidth);
    if (
      window.innerWidth > 1023 &&
      testRef.current!.offsetWidth > 468 &&
      testRef.current!.offsetWidth < 513
    )
      setJustifyC(true);
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
  // useEffect(() => {
  //   console.log(window.innerWidth, " : ", testRef.current!.offsetWidth);
  //   if (
  //     window.innerWidth > 1023 &&
  //     testRef.current!.offsetWidth > 468 &&
  //     testRef.current!.offsetWidth < 513
  //   )
  //     setJustifyC(true);
  // }, []);
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
        <div
          ref={testRef}
          className={`lg:flex lg:justify-center lg:items-center lg:w-full lg:mx-auto`}
        >
          <ul
            className={`overflow-scroll lg:flex ${
              justifyC ? "justify-center" : "justify-start"
            } lg:flex-row lg:flex-wrap`}
          >
            {studyLogsCtx.studyLogsData.map(
              (log: StudyLogObjFinal, index: number) => {
                return (
                  <li key={index} className="lg:basis-1/4 min-w-298">
                    <LogCard
                      date={log.date}
                      hour={log.hour}
                      cost={log.cost}
                      summary={log.summary}
                      location={log.location}
                      userId={log.userId}
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
