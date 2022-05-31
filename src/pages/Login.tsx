import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroModal from "../components/UI/Modal/HeroModal";
import Footer from "../layouts/Footer";
import LightModeContext from "../contexts/lightmode-context";

// firebase
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);

  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    console.log(lightModeCtx.isLightMode);
    window.document.documentElement.classList.toggle("dark");
  };

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Fragment>
      <HeroModal />
      <header className="bg-white dark:bg-gray-800 min-h-screen">
        <nav className="relative">
          <div className="fixedにするよー z-10 sticky top-0 container bg-white dark:bg-gray-800 flex items-center justify-between px-6 py-3 mx-auto">
            <div className="flex flex-row items-center">
              <Link
                className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                // href="#"
                to="/login"
              >
                StudyLog
              </Link>
              {lightModeCtx.isLightMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sun cursor-pointer inline-block ml-4 h-6 w-6 text-gray-700 dark:text-slate-100"
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
                  className="moon cursor-pointer inline-block ml-4 h-6 w-6 text-gray-700 dark:text-slate-100"
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

            <a
              className="my-1 text-sm font-medium text-emerald-400 dark:text-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-500 lg:mx-4 lg:my-0"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#heroModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </header>
      <div className="">
        <div className="container min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-center md:justify-start items-start px-6 pt-14 md:pt-8 lg:pt-28 mx-auto">
          <div className="items-center lg:flex grow">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <button
                  className="py-4 px-10 rounded-lg border border-emerald-400"
                  onClick={() => signInWithGoogle()}
                  disabled={authing}
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
