import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
import AntChart from "./Try/AntChart";
import SuccessAlert from "./UI/Alert/SuccessAlert";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  return (
    <div className="pb-48">
      <AddLogForm setIsAlert={setIsAlert} />
      <AntChart />
      {isAlert && <SuccessAlert isAlert={isAlert} />}
    </div>
  );
};

export default MainComponent;
