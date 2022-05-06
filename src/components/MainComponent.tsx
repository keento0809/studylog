import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
// import AntChart from "./Try/AntChart";
import HomeHourChart from "./UI/Chart/HomeHourChart";
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeCostChart from "./UI/Chart/HomeCostChart";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  return (
    <div className="">
      <AddLogForm setIsAlert={setIsAlert} />
      <div className="text-center py-4">
        <h1 className="text-3xl pb-4 font-semibold text-gray-800 dark:text-gray-100">
          Analysis
        </h1>
        <HomeHourChart />
        <HomeCostChart />
      </div>
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
