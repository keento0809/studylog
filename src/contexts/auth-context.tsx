import * as React from "react";
import { AuthValue } from "../models/Model";

const AuthContext = React.createContext<AuthValue>({} as AuthValue);

export default AuthContext;
