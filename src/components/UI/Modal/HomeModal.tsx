import { Fragment, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "tw-elements";
import { navMenuLabels } from "../../../data/data";
import { getAuth, signOut } from "firebase/auth";
import AuthContext from "../../../contexts/auth-context";
import { auth } from "../../../pages/Main";

const HomeModal = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const handleNavigatePage = (index: number) => {
    navigate(`/${navMenuLabels[index].toLowerCase()}`);
  };
  const handleSignOut = () => {
    authCtx.authLogout();
    signOut(auth);
    navigate("/");
  };
  return (
    <Fragment>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current dark:bg-slate-800">
            <div className="flex-1 md:flex md:flex-col md:items-center md:justify-between z-10 px-6 py-6 mx-auto">
              <div className="flex flex-col text-center -mx-4 md:flex-row md:items-center md:mx-8">
                <span
                  data-bs-dismiss="modal"
                  onClick={() => handleNavigatePage(0)}
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {navMenuLabels[0]}
                </span>
                <span
                  data-bs-dismiss="modal"
                  onClick={() => handleNavigatePage(1)}
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {navMenuLabels[1]}
                </span>
                <span
                  data-bs-dismiss="modal"
                  onClick={() => handleNavigatePage(2)}
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {navMenuLabels[2]}
                </span>
                <span
                  data-bs-dismiss="modal"
                  onClick={() => handleSignOut()}
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {localStorage.getItem("authState")
                    ? "Logout"
                    : navMenuLabels[3]}
                </span>
              </div>
              <div className="text-center pt-6">
                <button
                  data-bs-dismiss="modal"
                  className="w-full px-3 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeModal;
