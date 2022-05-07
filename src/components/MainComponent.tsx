import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
import { Link } from "react-router-dom";
import HomeHourChart from "./UI/Chart/HomeHourChart";
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeCostChart from "./UI/Chart/HomeCostChart";
import LogList from "./Log/LogList";
import HomeSectionCard from "./UI/Card/HomeSectionCard";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  return (
    <div className="mx-auto lg:flex lg:flex-row md:max-w-screen-md lg:max-w-screen-lg">
      <AddLogForm setIsAlert={setIsAlert} />
      <div className="text-center py-4 lg:py-8 mx-auto md:max-w-lg lg:w-full">
        {/* I gutta replace this section to HomeHistory component */}
        <h1 className="text-3xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Analysis
        </h1>
        <div className="pt-8 lg:pb-8 lg:flex lg:flex-row">
          <div className="mx-auto lg:w-1/2">
            <HomeHourChart />
          </div>
          <div className="mx-auto lg:w-1/2">
            <HomeCostChart />
          </div>
        </div>
        {/* I gutta replace this section to HomeHistory component */}
        <div className="hidden lg:block ">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            History
          </h1>
          <div className="mt-5 max-h-48 overflow-hidden">
            <LogList />
          </div>
          <button className="w-1/4 mx-autos my-3 px-2 py-1 text-sm font-medium tracking-wide text-emerald-400 border border-emerald-400 capitalize transition-colors duration-200 transform bg-white dark:bg-gray-800 rounded-full sm:mx-2 hover:bg-emerald-300 focus:outline-none focus:bg-emerald-500">
            <Link to="/history">More</Link>
          </button>
        </div>
      </div>
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
