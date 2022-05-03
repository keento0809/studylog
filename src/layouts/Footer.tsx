import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 fixed bottom-0 w-full border-t border-emerald-300">
      <div className="container px-6 py-6 mx-auto">
        <div className="text-center">
          <a
            href="#"
            className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            StudyLog
          </a>

          {/* <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p> */}

          {/* <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-3/6 mx-auto px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              <Link to="/home">Get started</Link>
            </button>
          </div> */}
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
          </p>

          {/* <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
