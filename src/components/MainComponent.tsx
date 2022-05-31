import React from "react";
import AddLogForm from "./Log/AddLogForm";
// temporary
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeHistory from "./Log/HomeHistory";
import HomeAnalysis from "./Analysis/HomeAnalysis";
import AuthContext from "../contexts/auth-context";

const MainComponent = () => {
  const [isAlert, setIsAlert] = React.useState(false);

  const authCtx = React.useContext(AuthContext);

  React.useEffect(() => {
    console.log(authCtx.isLoggedIn);
  }, []);

  return (
    <div className="mx-auto lg:flex lg:flex-row md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
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
