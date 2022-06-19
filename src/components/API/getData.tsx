import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../pages/Main";
import { StudyLogObjFinal } from "../../models/Model";

const getData = async () => {
  const newLoadedData: StudyLogObjFinal[] = [];
  // test: get data
  const querySnapshot = await getDocs(collection(db, "logs"));

  return querySnapshot;
};

export default getData;
