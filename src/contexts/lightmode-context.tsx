import React from "react";
import { lightModeValue } from "../models/Model";

const LightModeContext = React.createContext<lightModeValue>(
  {} as lightModeValue
);

export default LightModeContext;
