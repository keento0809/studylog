import { useState } from "react";
import { Link } from "react-router-dom";
import { PropsForHomeCard } from "../../../models/Model";

const HomeCard = ({ children, label, isHome }: PropsForHomeCard) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
      className={`transition transition-property: all ease-in-out delay-100 ${
        isHome ? "hover:bg-slate-50 hover:dark:bg-gray-800 relative" : ""
      } block w-full p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700 text-center mb-4`}
    >
      <h3 className="text-lg lg:text-base pt-3 pb-6 font-bold dark:text-slate-100">
        {label}
      </h3>
      {isHovering && isHome && (
        <div
          className={`transition transition-property: all ease-in-out delay-200 translate-y-100 z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full `}
        >
          <button className="z-20 w-1/2 mx-auto px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
            <Link to="/analysis">Detail</Link>
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default HomeCard;
