import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
import { Link } from "react-router-dom";
import HomeHourChart from "./UI/Chart/HomeHourChart";
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeCostChart from "./UI/Chart/HomeCostChart";
import HomeHistory from "./Log/HomeHistory";
import HomeAnalysis from "./Analysis/HomeAnalysis";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  return (
    <div className="mx-auto lg:flex lg:flex-row md:max-w-screen-md lg:max-w-screen-lg">
      <AddLogForm setIsAlert={setIsAlert} />
      <div className="text-center py-4 lg:py-8 mx-auto md:max-w-lg lg:w-full">
        <HomeAnalysis />
        <HomeHistory />
      </div>
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
