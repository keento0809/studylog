import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import MyInfo from "./MyInfo";
import Analysis from "./Analysis";
import History from "./History";
import MapTry from "../components/Try/MapTry";
import NotFound from "./NotFound";
import FirstMap from "../components/Try/FirstMap";
import AntChart from "../components/Try/AntChart";
import AutoComplete from "../components/Try/AutoComplete";

// firebase
import { initializeApp } from "firebase/app";
import { config } from "../config/config";
import { fireEvent } from "@testing-library/react";

// initialize firebaseApp
initializeApp(config.firebaseConfig);

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/history" element={<History />} />
      {/* temporary jump to MapTry */}
      <Route path="/location" element={<MapTry />} />
      {/* temporary */}
      <Route path="/auto" element={<AutoComplete />} />
      {/* temporary */}
      <Route path="/firstmap" element={<FirstMap />} />
      {/* temporary */}
      <Route path="/antchart" element={<AntChart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
