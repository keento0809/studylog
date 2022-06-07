import React from "react";
import AddLogForm from "./Log/AddLogForm";
import SuccessAlert from "./UI/Alert/SuccessAlert";
import HomeHistory from "./Log/HomeHistory";
import HomeAnalysis from "./Analysis/HomeAnalysis";

// test
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MainComponent = () => {
  // declare useState
  const [isAlert, setIsAlert] = React.useState(false);

  // declare auth
  const auth = getAuth();

  React.useEffect(() => {
    // test
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid, "user is logged in.");
      } else {
        console.log("user is signed out.");
      }
    });
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
