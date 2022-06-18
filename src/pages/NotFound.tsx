import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen pb-48 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold pb-5">Page Not Found</h2>
        <button
          className="w-2/3 px-4 py-3 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500"
          style={{ maxWidth: "240px" }}
        >
          <Link to="/">HOME</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
