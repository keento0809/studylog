import React from "react";
import { BrowserRouter } from "react-router-dom";
import LightModeProvider from "./contexts/LightModeProvider";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <LightModeProvider>
        <Main />
      </LightModeProvider>
    </BrowserRouter>
  );
}

export default App;
