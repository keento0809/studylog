import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="bg-white dark:bg-gray-800 min-h-screen">
      <nav className="">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              StudyLog
            </a>
          </div>

          <a
            className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
            href="#"
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

      <div className="こいつにflexboxつけるよ">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                  Analyze your <span className="text-blue-500">Study-Log</span>
                </h1>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  be the first to knows when our{" "}
                  <span className="font-medium text-blue-500">Brand</span> is
                  live
                </p>

                <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                  <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-full lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                    <Link to="/home">Get started</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-lg">
              <img
                className="w-full h-full max-w-md rounded-lg"
                src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
