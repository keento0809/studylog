import React, { Fragment, useContext, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeroModal from "../components/UI/Modal/HeroModal";
import HeroNav from "../components/UI/Nav/HeroNav";
import Footer from "../layouts/Footer";
import LightModeContext from "../contexts/lightmode-context";
import AuthContext from "../contexts/auth-context";

// firebase
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Auth from "../components/Auth/Auth";

const Signup = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);
  const authCtx = useContext(AuthContext);

  // declare useState
  const [authing, setAuthing] = useState(false);

  // declare useRef
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // declare auth
  const auth = getAuth();

  // declare navigate
  const navigate = useNavigate();

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    console.log(lightModeCtx.isLightMode);
    window.document.documentElement.classList.toggle("dark");
  };

  const handleSignIn = () => {
    const enteredUserInfo = {
      auth: auth,
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };
    console.log(enteredUserInfo);
    createUserWithEmailAndPassword(
      auth,
      emailInputRef.current!.value,
      passwordInputRef.current!.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        authCtx.authLogin();
        localStorage.setItem("authByEmail", "signInWithEmailAndPass");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Fragment>
      <HeroModal />
      <header className="bg-white dark:bg-gray-800 fixed top-0 w-full">
        <HeroNav handleToggleMode={handleToggleMode} />
      </header>
      <div
        className="bg-white dark:bg-gray-800 dark:text-slate-100"
        style={{ minHeight: "100vh" }}
      >
        <div className="container min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-center md:justify-start items-start px-6 pt-14 md:pt-8 lg:pt-28 mx-auto">
          <div className="items-center lg:flex grow">
            <div className="w-full">
              <div className="py-4">
                {/* <button
                  className="py-4 px-10 rounded-lg border border-emerald-400"
                  onClick={() => signInWithGoogle()}
                  disabled={authing}
                >
                  Sign in with Google
                </button> */}

                {/* original */}
                {/* <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4"> */}
                <div className="w-full px-4 フォームトップですよ">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 dark:text-slate-100 rounded lg:w-1/3  md:w-1/2 w-full p-8 mt-4">
                      <p
                        tab-index="0"
                        className="focus:outline-none text-2xl font-extrabold leading-6 text-center text-gray-800 dark:text-slate-100"
                      >
                        Sign up here
                      </p>
                      <div className="text-center py-2">
                        <p
                          tab-index="0"
                          className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                        >
                          Already have an account?{" "}
                          <Link
                            to="/login"
                            className="hover:text-emerald-500 
                          hover:dark:text-emerald-600 focus:text-emerald-500 focus:outline-none text-sm font-medium leading-none  text-gray-800 cursor-pointer"
                          >
                            {" "}
                            Log in here
                          </Link>
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-between py-5">
                        {/* <hr className="w-full bg-gray-600" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-600 dark:text-slate-100">
                          OR
                        </p>
                        <hr className="w-full bg-gray-600 dark:bg-slate-100 " /> */}
                      </div>
                      <div>
                        <label
                          id="email"
                          className="text-sm font-medium leading-none text-gray-800 dark:text-emerald-500 "
                        >
                          Email *
                        </label>
                        <input
                          aria-labelledby="email"
                          type="email"
                          ref={emailInputRef}
                          className="bg-white dark:bg-gray-800 border border-gray-600 rounded  text-xs font-medium leading-none text-gray-800 dark:text-slate-100 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400 focus:dark:border-emerald-500"
                        />
                      </div>
                      <div className="mt-6  w-full">
                        {/* for="pass" */}
                        <label className="text-sm font-medium leading-none text-gray-800 dark:text-emerald-500 ">
                          Password *
                        </label>
                        <div className="relative flex items-center justify-center">
                          <input
                            id="pass"
                            type="password"
                            ref={passwordInputRef}
                            className="bg-white dark:bg-gray-800 border border-gray-600 rounded  text-xs font-medium leading-none text-gray-800  focus:outline-none focus:ring-emerald-400 focus:border-emerald-400 dark:text-slate-100 py-3 w-full pl-3 mt-2"
                          />
                          <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                            <img
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                              alt="viewport"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button
                          role="button"
                          onClick={handleSignIn}
                          className="text-sm font-semibold leading-none text-white focus:outline-none bg-emerald-400 dark:bg-emerald-500 border dark:border-emerald-500 rounded hover:bg-emerald-500 py-4 w-full"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Signup;
