import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Home from "./Home";
import MyInfo from "./MyInfo";
import Analysis from "./Analysis";
import History from "./History";
import MapTry from "../components/Try/MapTry";
import NotFound from "./NotFound";
import FirstMap from "../components/Try/FirstMap";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/history" element={<History />} />
      {/* temporary */}
      <Route path="/maptry" element={<MapTry />} />
      {/* temporary */}
      <Route path="/firstmap" element={<FirstMap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
