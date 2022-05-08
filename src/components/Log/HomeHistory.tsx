import { Link } from "react-router-dom";
import LogList from "./LogList";

const HomeHistory = () => {
  return (
    <div className="hidden lg:block ">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        History
      </h1>
      <div className="mt-4 max-h-48 overflow-hidden">
        <LogList />
      </div>
      <button className="w-1/4 mx-autos my-4 px-2 py-1 text-sm font-medium tracking-wide text-emerald-400 border border-emerald-400 capitalize transition-colors duration-200 transform bg-white dark:bg-gray-800 rounded-full sm:mx-2 hover:bg-emerald-300 focus:outline-none focus:bg-emerald-500">
        <Link to="/history">More</Link>
      </button>
    </div>
  );
};

export default HomeHistory;
