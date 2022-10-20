import React, { useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { lightModeValue } from "../models/Model";
import LightModeContext from "../contexts/lightmode-context";
import { signOut } from "firebase/auth";
import { navMenuLabels } from "../data/data";
import AuthContext from "../contexts/auth-context";
import { auth } from "../pages/Main";

const Header = () => {
  // declare navigate
  const navigate = useNavigate();

  // declare useContext
  const lightModeCtx = useContext(LightModeContext);
  const authCtx = useContext(AuthContext);

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    window.document.documentElement.classList.toggle("dark");
  };

  const handleNavigatePage = (index: number) => {
    navigate(`/${navMenuLabels[index].toLowerCase()}`);
  };

  const handleLogout = () => {
    signOut(auth);
    authCtx.authLogout();
    navigate("/");
  };

  return (
    <Fragment>
      <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="text-xl font-semibold text-gray-700">
                <div className="flex flex-row items-center">
                  <Link
                    className="text-lg font-bold tracking-tighter text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                    // href="#"
                    to="/home"
                  >
                    StudyLog
                  </Link>
                  {lightModeCtx.isLightMode && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="sun inline-block ml-4 h-5 w-5 text-gray-700 dark:text-slate-100 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      onClick={handleToggleMode}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                  {!lightModeCtx.isLightMode && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="moon inline-block ml-4 h-5 w-5 text-gray-700 dark:text-slate-100 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      onClick={handleToggleMode}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="flex flex-col text-center -mx-4 md:flex-row md:items-center md:mx-8 xl:ml-auto xl:mr-0">
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(0)}
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-xs font-semibold text-gray-700 transition-colors duration-200 transform rounded-full md:mt-0 dark:text-gray-200 hover:bg-emerald-400 hover:text-white dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[0]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(1)}
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-xs font-semibold text-gray-700 transition-colors duration-200 transform rounded-full md:mt-0 dark:text-gray-200 hover:bg-emerald-400 hover:text-white dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[1]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(2)}
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-xs font-semibold text-gray-700 transition-colors duration-200 transform rounded-full md:mt-0 dark:text-gray-200 hover:bg-emerald-400 hover:text-white dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[2]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={
                      localStorage.getItem("authState")
                        ? () => handleLogout()
                        : () => handleNavigatePage(3)
                    }
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-xs font-semibold text-gray-700 transition-colors duration-200 transform rounded-full md:mt-0 dark:text-gray-200 hover:bg-emerald-400 hover:text-white dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {localStorage.getItem("authState")
                      ? "Logout"
                      : navMenuLabels[3]}
                    {/* {navMenuLabels[3]} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
