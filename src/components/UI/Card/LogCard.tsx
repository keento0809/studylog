import { useState, useEffect } from "react";
import {
  IsHome,
  StudyLogObj,
  StudyLogObjWithIsHome,
} from "../../../models/Model";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";

const LogCard = ({ date, hour, cost, summary }: StudyLogObj) => {
  const [isShown, setIsShown] = useState(false);

  const handleToggleAccordion = () => {
    setIsShown(!isShown);
  };

  useEffect(() => {
    window.innerWidth > 1023 && setIsShown(true);
  }, []);

  return (
    <div className="max-w-sm mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700 lg:mr-4 lg:min-h-270">
      <div className="flex items-center justify-between px-6 py-3 bg-emerald-400 dark:bg-emerald-500">
        <div className="flex flex-row items-center">
          <CalendarIcon className="block h-5 w-5 text-white dark:text-slate-100" />
          {/* props.date */}
          <h1 className="mx-3 text-lg font-semibold text-white dark:text-slate-100">
            {date}
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center">
          {/* props.hour */}
          <h1 className="mx-3 text-lg font-semibold text-white dark:text-slate-100">
            {hour} hrs
          </h1>
          {!isShown && (
            <ChevronDownIcon
              onClick={handleToggleAccordion}
              className="block h-5 w-5 text-white lg:hidden"
            />
          )}
          {isShown && (
            <ChevronUpIcon
              onClick={handleToggleAccordion}
              className="block h-5 w-5 text-white lg:hidden"
            />
          )}
        </div>
      </div>

      {isShown && (
        <div className="px-6 py-4">
          {/* props.summary */}
          <div className="lg:min-h-100 lg:flex lg:justify-center lg:items-center">
            <p className="text-lg py-2 text-gray-700 dark:text-white font-bold">
              {/* Full Stack maker & UI / UX Designer , love hip hop music Author of
            Building UI. */}
              {summary}
            </p>
          </div>

          <div className="">
            <div className="flex flex-row justify-center items-center">
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* <ClockIcon className="block h-5 w-5" /> */}
                {/* props.hour */}
                <h1 className="px-2 text-xs leading-6">{hour} hrs</h1>
              </div>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* props.cost */}
                <h1 className="px-2 text-xs leading-6">$ {cost}</h1>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4 text-gray-700 dark:text-gray-200">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                />
              </svg>
              {/* props.address */}
              <h1 className="px-2 text-xs leading-6">
                833 Granville St, Vancouver, BC
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogCard;
