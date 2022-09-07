import { useState, useEffect, useRef } from "react";
import { IsHome, StudyLogObj, StudyLogObjFinal } from "../../../models/Model";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import axios from "axios";

const LogCard = ({ date, hour, cost, summary }: StudyLogObjFinal) => {
  const [isShown, setIsShown] = useState(false);
  const [address, setAddress] = useState("");

  const testRef = useRef<HTMLDivElement>(null);

  const handleToggleAccordion = () => {
    setIsShown(!isShown);
  };

  useEffect(() => {
    testRef.current!.offsetWidth <= 400 && setIsShown(false);
    window.innerWidth > 1023 &&
      testRef.current!.offsetWidth > 280 &&
      setIsShown(true);
    window.innerWidth > 1023 &&
      testRef.current!.offsetWidth <= 280 &&
      setIsShown(false);
  }, []);

  return (
    <div
      ref={testRef}
      className={`max-w-sm mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700 lg:mr-4 ${
        isShown ? "" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 bg-emerald-400 dark:bg-emerald-500">
        <div className="flex flex-row items-center">
          <CalendarIcon className="block h-5 w-5 text-white dark:text-slate-100" />
          <h1 className="mx-3 text-lg font-semibold text-white dark:text-slate-100">
            {date}
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center">
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
          <div className="min-h-50 lg:min-h-100 flex justify-center items-center">
            <p className="text-lg py-2 text-gray-700 dark:text-white font-bold">
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
                <h1 className="px-2 text-xs leading-6">$ {cost}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogCard;
