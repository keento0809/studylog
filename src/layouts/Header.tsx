import React, { useContext, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { lightModeValue } from "../models/Model";
import LightModeContext from "../contexts/lightmode-context";

const navMenuLabels = ["Home", "Analysis", "History", "Logout", "MyInfo"];

const Header = () => {
  // declare navigate
  const navigate = useNavigate();

  // declare useState
  const [isShow, setIsShow] = useState(false);
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    console.log(lightModeCtx.isLightMode);
    window.document.documentElement.classList.toggle("dark");
  };

  const handleNavigatePage = (index: number) => {
    navigate(`/${navMenuLabels[index].toLowerCase()}`);
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
                    className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                    // href="#"
                    to="/home"
                  >
                    StudyLog
                  </Link>
                  {lightModeCtx.isLightMode && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="sun inline-block ml-4 h-6 w-6 text-gray-700 dark:text-slate-100 cursor-pointer"
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
                      className="moon inline-block ml-4 h-6 w-6 text-gray-700 dark:text-slate-100 cursor-pointer"
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
                <div className="flex flex-col text-center -mx-4 md:flex-row md:items-center md:mx-8">
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(0)}
                    // value="/myinfo"
                    // href="#"
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[0]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(1)}
                    // to="/analysis"
                    // href="#"
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[1]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(2)}
                    // to="/logs"
                    // href="#"
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[2]}
                  </span>
                  <span
                    data-bs-dismiss="modal"
                    onClick={() => handleNavigatePage(3)}
                    className="px-4 py-2 mx-2 xl:mx-4 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-emerald-500 cursor-pointer"
                  >
                    {navMenuLabels[3]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isShow && (
        <div className="flex-1 md:flex md:items-center md:justify-between z-10 px-6 py-3 mx-auto">
          <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <a
              href="#"
              className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              MyInfo
            </a>
            <a
              href="#"
              className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Analysis
            </a>
            <a
              href="#"
              className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              History
            </a>
            <a
              href="#"
              className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Logout
            </a>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <button
              className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  className="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>

              <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                H.KENTO
              </h3>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
