import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
// import AntChart from "./Try/AntChart";
import HomeHistoryChart from "./UI/Chart/HomeHistoryChart";
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeCostChart from "./UI/Chart/HomeCostChart";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  return (
    <div className="pb-48">
      <AddLogForm setIsAlert={setIsAlert} />
      <HomeHistoryChart />
      <HomeCostChart />
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
