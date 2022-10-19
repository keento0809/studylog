import { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import Footer from "../layouts/Footer";
import HeroModal from "../components/UI/Modal/HeroModal";
import HeroNav from "../components/UI/Nav/HeroNav";
import LightModeContext from "../contexts/lightmode-context";

const Hero = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    window.document.documentElement.classList.toggle("dark");
  };

  return (
    <Fragment>
      <HeroModal />
      <header
        className="bg-white dark:bg-gray-800"
        style={{ minHeight: "100vh" }}
      >
        <HeroNav handleToggleMode={handleToggleMode} />

        <div className="">
          <div className="container md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-center md:justify-start items-start px-6 pt-14 md:pt-8 lg:pt-28 mx-auto">
            <div className="items-center lg:flex grow">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-2xl font-semibold tracking-tighter text-gray-800 dark:text-white lg:text-3xl">
                    Analyze your{" "}
                    <span className="text-emerald-400">Study-Log</span>
                  </h1>

                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Memorize your progress and efforts for studying
                  </p>

                  <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                    <Link to="/login">
                      <button className="w-full md:w-40 md:mr-auto lg:mx-0 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 dark:bg-emerald-500 rounded-full lg:w-auto hover:bg-emerald-500 dark:hover:bg-emerald-600 focus:outline-none focus:bg-emerald-500">
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex grow items-center justify-center md:justify-start w-full mt-6 lg:mt-0 lg:w-1/2 rounded-lg">
                <img
                  className="w-full h-full max-w-md lg:max-w-none rounded-lg"
                  src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </Fragment>
  );
};

export default Hero;
