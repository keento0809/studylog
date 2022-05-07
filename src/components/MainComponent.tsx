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
    <div className="mx-auto lg:flex lg:flex-row md:max-w-screen-md lg:max-w-screen-lg">
      <AddLogForm setIsAlert={setIsAlert} />
      <div className="text-center py-4 lg:py-8 mx-auto md:max-w-lg lg:max-w-full">
        <h1 className="text-3xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Analysis
        </h1>
        <div className="pt-8 lg:max-w-md">
          <HomeHourChart />
          <HomeCostChart />
        </div>
      </div>
      {/* <div className="">

      </div> */}
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
