import React from "react";
import { StudyLogsContextInterface } from "../models/Model";

const StudyLogsContext = React.createContext<StudyLogsContextInterface>(
  {} as StudyLogsContextInterface
);

export default StudyLogsContext;
