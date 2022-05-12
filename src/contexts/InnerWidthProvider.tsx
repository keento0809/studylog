import React from "react";
import { PropsChildren } from "../models/Model";

const StudyLogsProvider = ({ children }: PropsChildren) => {
  // declare useState
  const [isOpened, setIsOpened] = React.useState(false);
  return <div>{children}</div>;
};

export default StudyLogsProvider;
