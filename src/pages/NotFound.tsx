import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen pb-72 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold pb-2">Page Not Found</h2>
        <button className="w-1/3 px-4 py-3 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
          <Link to="/">HOME</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
