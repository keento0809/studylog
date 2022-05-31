import React from "react";
import { BrowserRouter } from "react-router-dom";
import LightModeProvider from "./contexts/LightModeProvider";
import StudyLogsProvider from "./contexts/StudyLogsProvider";
import AuthProvider from "./contexts/AuthProvider";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <StudyLogsProvider>
        <LightModeProvider>
          <AuthProvider>
            <Main />
          </AuthProvider>
        </LightModeProvider>
      </StudyLogsProvider>
    </BrowserRouter>
  );
}

export default App;
