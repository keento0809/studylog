import { Fragment } from "react";
import HomeHourChart from "../UI/Chart/HomeHourChart";
import HomeCostChart from "../UI/Chart/HomeCostChart";

const HomeAnalysis = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default HomeAnalysis;
