import React from "react";
import { BrowserRouter } from "react-router-dom";
import LightModeProvider from "./contexts/LightModeProvider";
import StudyLogsProvider from "./contexts/StudyLogsProvider";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <StudyLogsProvider>
        <LightModeProvider>
          <Main />
        </LightModeProvider>
      </StudyLogsProvider>
    </BrowserRouter>
  );
}

export default App;
