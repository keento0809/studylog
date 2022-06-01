import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroModal from "../components/UI/Modal/HeroModal";
import HeroNav from "../components/UI/Nav/HeroNav";
import Footer from "../layouts/Footer";
import LightModeContext from "../contexts/lightmode-context";
import AuthContext from "../contexts/auth-context";

// firebase
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  // declare useContext
  const lightModeCtx = useContext(LightModeContext);
  const authCtx = useContext(AuthContext);

  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  console.log(authCtx.isLoggedIn);

  const handleToggleMode = () => {
    lightModeCtx.toggleMode();
    console.log(lightModeCtx.isLightMode);
    window.document.documentElement.classList.toggle("dark");
  };

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid, "loginしまっせ");
        // add authContext
        authCtx.authLogin();
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
      <header className="bg-white dark:bg-gray-800 fixed top-0 w-full">
        <HeroNav handleToggleMode={handleToggleMode} />
      </header>
      <div
        className="bg-white dark:bg-gray-800 dark:text-slate-100"
        style={{ minHeight: "100vh" }}
      >
        <div className="container min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-center md:justify-start items-start px-6 pt-14 md:pt-8 lg:pt-28 mx-auto">
          <div className="items-center lg:flex grow">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg py-4">
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
