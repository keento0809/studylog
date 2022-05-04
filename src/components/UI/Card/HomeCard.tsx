import { Link } from "react-router-dom";
import { PropsForHomeCard } from "../../../models/Model";

const HomeCard = ({ children, label, isHome }: PropsForHomeCard) => {
  return (
    <div
      className={`${
        isHome ? "hover:opacity-50 relative" : ""
      } w-full p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center mb-4`}
    >
      <h3 className="text-xl pt-3 pb-6 font-bold">{label}</h3>
      {/* overlay button */}
      <div
        className={`hidden ${
          isHome
            ? "hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            : ""
        }`}
      >
        <button className="z-20 w-1/2 mx-auto px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
          <Link to="/analysis">Detail</Link>
        </button>
      </div>
      {children}
    </div>
  );
};

export default HomeCard;
