import React from "react";
import LightModeContext from "./lightmode-context";
import { PropsChildren, lightModeValue } from "../models/Model";

const LightModeProvider = ({ children }: PropsChildren) => {
  // declare useState
  const [isLightMode, setIsLightMode] = React.useState(false);

  const handleToggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const lightModeContext: lightModeValue = {
    isLightMode: isLightMode,
    toggleMode: handleToggleMode,
  };
  return (
    <LightModeContext.Provider value={lightModeContext}>
      {children}
    </LightModeContext.Provider>
  );
};

export default LightModeProvider;
