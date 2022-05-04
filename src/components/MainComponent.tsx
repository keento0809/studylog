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
      <HomeHourChart />
      <HomeCostChart />
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
