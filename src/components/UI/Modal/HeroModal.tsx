import { Fragment } from "react";

const HeroModal = () => {
  return (
    <Fragment>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="heroModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-800 bg-clip-padding rounded-md outline-none text-current">
            <div className="flex-1 md:flex md:flex-col md:items-center z-10 px-6 py-6 mx-auto">
              <div className="modal-description">
                <h2 className="font-bold dark:text-slate-100 pb-4">
                  What is StudyLog?
                </h2>
                <p className="pb-4 dark:text-slate-300">
                  StudyLog is the web application logging your daily study
                  record to analyze it and to be more confident about yourself
                  looking back your progress and efforts in it.
                </p>
                <p className="pb-4 dark:text-slate-300">
                  It must be fun and helpful for you to start adding study
                  records on daily basis. You can also enter the amount of money
                  you spend and the location where you study as a portion of
                  studyLog. So now it's time to start a new chapter of study
                  life pursuing your goal!
                </p>
              </div>
              <div className="text-center pt-6">
                <button
                  data-bs-dismiss="modal"
                  className="mx-auto w-6/12 md:w-full px-4 py-1 text-sm font-medium tracking-wide text-white dark:text-slate-100 capitalize transition-colors duration-200 transform bg-emerald-400 dark:bg-emerald-500 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500"
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

export default HeroModal;
