import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Home from "./Home";
import MyInfo from "./MyInfo";
import Analysis from "./Analysis";
import History from "./History";
import Location from "./Location";
import MapTry from "../components/Try/MapTry";
import NotFound from "./NotFound";
import FirstMap from "../components/Try/FirstMap";
import AntChart from "../components/Try/AntChart";
import SecondTry from "../components/Try/SecondTry";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/history" element={<History />} />
      {/* temporary jump to MapTry */}
      <Route path="/location" element={<MapTry />} />
      {/* temporary */}
      <Route path="/maptry" element={<MapTry />} />
      {/* temporary */}
      <Route path="/firstmap" element={<FirstMap />} />
      {/* temporary */}
      <Route path="/antchart" element={<AntChart />} />
      {/* temporary */}
      {/* <Route path="/second" element={<SecondTry />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
