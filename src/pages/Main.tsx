import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Home from "./Home";
import MyInfo from "./MyInfo";
import Analysis from "./Analysis";
import Logs from "./Logs";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/logs" element={<Logs />} />
    </Routes>
  );
};

export default Main;
