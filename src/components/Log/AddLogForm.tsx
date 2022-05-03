import axios from "axios";
import React, { useRef, useState } from "react";
import { GoogleGeocodingRes, StudyLogObj } from "../../models/Model";

const AddLogForm = () => {
  // declare useRef
  const locationInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);
  const costInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLInputElement>(null);

  const [isMapping, setIsMapping] = useState(false);

  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  var google = window.google;

  // testing
  // const defaultMap = new google.maps.Map(
  //   document.getElementById("defaultMap")!,
  //   {
  //     center: { lat: 10, lng: 10 },
  //     zoom: 8,
  //   }
  // );

  function handleSearchAddress(event: React.FormEvent) {
    event.preventDefault();

    const enteredInput = locationInputRef.current!.value;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredInput
        )}&key=${GOOGLE_API_KEY}`
      )
      .then((res) => {
        if (res.data.status !== "OK") {
          throw new Error("Request failed.");
        }
        const locationInfo = res.data.results[0].geometry.location;
        console.log(locationInfo);
        const map = new google.maps.Map(document.getElementById("mapping")!, {
          center: locationInfo,
          zoom: 15,
        });
        new google.maps.Marker({ position: locationInfo, map: map });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }

  function handleSubmitLog(event: React.FormEvent) {
    event.preventDefault();
    const enteredHour = hourInputRef.current?.value;
    const enteredCost = costInputRef.current?.value;
    const enteredSummary = summaryInputRef.current?.value;

    if (
      enteredHour === undefined ||
      enteredCost === undefined ||
      enteredSummary === undefined
    ) {
      alert("Invalid input");
      return;
    }
    const studyLog: StudyLogObj = {
      hour: enteredHour,
      cost: enteredCost,
      summary: enteredSummary,
    };

    const sendRequest = async () => {
      const res = await fetch(
        "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json",
        {
          method: "POST",
          body: JSON.stringify(studyLog),
        }
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      console.log(data);

      hourInputRef.current!.value = "";
      costInputRef.current!.value = "";
      summaryInputRef.current!.value = "";
    };
    sendRequest();
  }

  return (
    <div className="">
      {/* <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
        Add New Log
      </h1> */}
      <form
        action=""
        className="googleMap-search py-4"
        onSubmit={handleSearchAddress}
      >
        <input
          ref={locationInputRef}
          className="w-3/5 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
          type="text"
          placeholder="Search here"
        />
        <button className="w-1/3 px-4 py-3 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
          Search
        </button>
      </form>
      <form className="bg-white dark:bg-gray-800" onSubmit={handleSubmitLog}>
        <div className="max-w-3xl py-3 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Add New Log
          </h1>

          <div
            id="mapping"
            className="w-full bg-slate-100 h-48 my-4 rounded-lg flex items-center justify-center"
          >
            <p className="text-xs">Search result will be displayed.</p>
          </div>

          <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <div className="flex flex-col items-start">
              <label htmlFor="" className="block pl-4">
                Date *
              </label>
              <input
                ref={hourInputRef}
                type="date"
                className="w-6/12 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                placeholder="Hour"
              />
            </div>
            <div className="flex flex-row items-start">
              <div className="flex flex-col items-start">
                <label htmlFor="" className="block pl-4">
                  Hour *
                </label>
                <input
                  ref={hourInputRef}
                  type="text"
                  className="w-4/5 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                  placeholder="Hour"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="" className="block pl-4">
                  Cost
                </label>
                <input
                  ref={costInputRef}
                  type="text"
                  className="w-fll mx-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                  placeholder="$"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="" className="pl-4">
                Summary *
              </label>
              <input
                ref={summaryInputRef}
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                placeholder="Text here"
              />
            </div>

            <div className="py-4">
              <button className="w-full px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
      {isMapping && (
        <div id="mapping" style={{ width: "100%", height: "200px" }}></div>
      )}
    </div>
  );
};

export default AddLogForm;
