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
        </div>

        {/* <hr className="my-6 border-gray-200 dark:border-gray-700" /> */}

        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
